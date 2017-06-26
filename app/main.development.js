/* eslint global-require: 0, flowtype-errors/show-errors: 0, camelcase: 1 */
import electron from 'electron'
import referer from 'electron-referer'
import appMenu from './menu'

const Config = require('electron-config')

const { app, BrowserWindow, ipcMain, shell } = electron
let mainWindow

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')()
  const path = require('path')
  const p = path.join(__dirname, '..', 'app', 'node_modules')
  require('module').globalPaths.push(p)
}

require('electron-context-menu')()

const installExtensions = async () => {
  const loadDevtool = require('electron-load-devtool')
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    extensions.map(name => loadDevtool(loadDevtool[name]))
  ).catch(console.log)
}

const config = new Config({
  defaults: {
    bounds: {
      width: 1200,
      height: 800,
    },
  },
})

function createMainWindow() {
  const { width, height, x, y } = config.get('bounds')
  const win = new BrowserWindow({
    title: 'PixivDeck',
    width,
    height,
    x,
    y,
    show: false,
  })

  win.loadURL(`file://${__dirname}/app.html`)

  win.on('closed', () => {
    mainWindow = null
  })
  ;['resize', 'move'].forEach(ev => {
    win.on(ev, () => {
      config.set('bounds', win.getBounds())
    })
  })

  const { webContents } = win

  webContents.on('did-finish-load', () => {
    referer('http://www.pixiv.net', win)
  })

  webContents.on('new-window', (event: Event, url: string) => {
    if (/intent\/twitter/.test(url)) {
      return
    }
    event.preventDefault()
    shell.openExternal(url)
  })

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions()
  }

  mainWindow = createMainWindow()
  mainWindow.show()
  mainWindow.focus()

  const page = mainWindow.webContents

  electron.Menu.setApplicationMenu(appMenu)

  ipcMain.on('tweet', (ev, url) => {
    openTweet(url)
  })

  app.on('before-quit', () => {
    page.send('save')
  })
})

function openTweet(url: string) {
  const tweetWin = new BrowserWindow({ width: 600, height: 400 })

  const page = tweetWin.webContents

  page.on('will-navigate', (event, url) => {
    if (/twitter\.com\/intent\/tweet\/complete/.test(url)) {
      tweetWin.close()
    }

    event.preventDefault()
  })

  tweetWin.loadURL(url, { httpReferrer: 'https://twitter.com' })
}
