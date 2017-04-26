// @flow
/* eslint-disable camelcase */
import electron from 'electron'
import Config from 'electron-config'
import referer from 'electron-referer'
import appMenu from './menu'

const { app, BrowserWindow, ipcMain, shell } = electron
let mainWindow

require('electron-context-menu')()

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

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')()
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
  const win = new BrowserWindow({ title: 'PixivDeck', width, height, x, y })

  if (process.env.NODE_ENV === 'development') {
    const loadExtensions = async () => {
      const installExtension = require('electron-devtools-installer')

      const install = installExtension.default
      try {
        await install(installExtension.REACT_DEVELOPER_TOOLS)
        await install(installExtension.REDUX_DEVTOOLS)
      } catch (err) {
        console.error(err)
      }
    }

    loadExtensions()
  }

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

app.on('ready', () => {
  mainWindow = createMainWindow()
  const page = mainWindow.webContents

  electron.Menu.setApplicationMenu(appMenu)

  ipcMain.on('tweet', (ev, url) => {
    openTweet(url)
  })

  app.on('before-quit', () => {
    page.send('save')
  })
})
