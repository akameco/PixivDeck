const fs = require('fs')
const path = require('path')
const glob = require('glob')
const del = require('del')
const { promisify } = require('util')
const { compile } = require('flow-to-typescript')

const globP = promisify(glob)

// const path = 'path/to/file.js.flow'
// const file = readFileSync(path, 'utf-8')
async function main() {
  // const files = await promisify(glob)('app/components/**/*.js')
  // console.log(files)
  // const files = await promisify(glob)('app/(containers)/**/*.js')
  // const files = await globP('app/containers/**/+(styles|sagas|saga).js')
  // const files = await globP('app/*.js')
  // const files = await globP('app/styles/*.js')
  // const files = await globP('app/containers/**/+(selector).js')
  const files = await globP('app/containers/**/*.js')
  for (const file of files) {
    console.log(file)
    const input = fs.readFileSync(file, 'utf8')
    // console.log(file)
    const result = await compile(input).catch(console.error)
    // console.log(result)
    const outputFile = file.replace(path.parse(file).ext, '.tsx')
    // const outputFile = file.replace(path.parse(file).ext, '.ts')
    fs.writeFileSync(outputFile, result)
    await del(file)
  }
}

main()
// const files = fs.readdirSync(path.resolve(__dirname, 'app/components'))
// console.log(files)
// compile(file, path).then(ts => writeFileSync('path/to/file.ts', ts))
