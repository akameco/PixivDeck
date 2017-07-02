/* eslint global-require: 0, flowtype-errors/show-errors: 0, camelcase: 1 */
import electron from 'electron'
import referer from 'electron-referer'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'
import appMenu from './menu'

const ms = require('ms')

autoUpdater.logger = log
autoUpdater.logger.transports.file.level = 'info'

const Config = require('electron-config')

const { app, BrowserWindow, ipcMain, shell } = electron
let mainWindow

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support')
  sourceMapSupport.install()
}

// 常にbeta版なのでいついかなる時でもデバック可能なのだ...!もちろん配布後であっても...!
require('electron-debug')({ enabled: true })

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  const path = require('path')
  const p = path.join(__dirname, '..', 'app', 'node_modules')
  require('module').globalPaths.push(p)
}

require('electron-context-menu')()

const installExtensions = async () => {
  const loadDevtool = require('electron-load-devtool')
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    // chromeにreact&redux devtoolを開発者が入れておく必要がある
    // 個別のアプリごとにインストールするライブラリもあるが、確実に有利な点一つがある。
    // 管理しなくても常に最新の開発者ツールを使えることだ
    extensions.map(name => loadDevtool(loadDevtool[name], { enabled: true }))
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
  // if (
  // process.env.NODE_ENV === 'development' ||
  // process.env.DEBUG_PROD === 'true'
  // ) {
  await installExtensions()
  // }

  mainWindow = createMainWindow()
  mainWindow.show()
  mainWindow.focus()

  electron.Menu.setApplicationMenu(appMenu)

  autoUpdater.checkForUpdates()

  ipcMain.on('tweet', (ev, url) => {
    openTweet(url)
  })
})

autoUpdater.on('update-downloaded', () => {
  setTimeout(() => {
    autoUpdater.quitAndInstall()
    app.quit()
  }, ms('5s'))
})

autoUpdater.on('checking-for-update', () => {
  log.info('Checking for update...')
})
autoUpdater.on('update-available', (ev, info) => {
  log.info(`Update available.${info}`)
})
autoUpdater.on('update-not-available', (ev, info) => {
  log.info(`Update not available.\n${info}`)
})
autoUpdater.on('error', (ev, err) => {
  log.info(`Error in auto-updater.\n${err}`)
})
autoUpdater.on('download-progress', () => {
  log.info('Download progress...')
})
autoUpdater.on('update-downloaded', () => {
  log.info('Update downloaded; will install in 5 seconds')
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
