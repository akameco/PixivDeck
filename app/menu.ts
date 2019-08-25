import os from 'os'
import electron from 'electron'

const { app, shell } = electron
const appName = app.getName()

const helpSubmenu: electron.MenuItemConstructorOptions[] = [
  {
    label: `${appName} Website`,

    click() {
      shell.openExternal('https://github.com/akameco/PixivDeck')
    },
  },
  {
    label: 'Report an Issue...',

    click() {
      const body = `
			<!-- Please succinctly describe your issue and steps to reproduce it. -->

			-

			${app.getName()} ${app.getVersion()}
			Electron ${process.versions.electron}
			${process.platform} ${process.arch} ${os.release()}`
      shell.openExternal(
        `https://github.com/akameco/PixivDeck/issues/new?body=${encodeURIComponent(
          body
        )}`
      )
    },
  },
]

if (process.platform !== 'darwin') {
  helpSubmenu.push(
    {
      type: 'separator',
    },
    {
      role: 'about',

      click() {
        electron.dialog.showMessageBox({
          title: `About ${appName}`,
          message: `${appName} ${app.getVersion()}`,
          detail: 'Created by akameco',
          buttons: [],
        })
      },
    }
  )
}

const darwinTpl: electron.MenuItemConstructorOptions[] = [
  {
    label: appName,
    submenu: [
      {
        role: 'about',
      },
      {
        type: 'separator',
      },
      {
        role: 'services',
        submenu: [],
      },
      {
        type: 'separator',
      },
      {
        role: 'hide',
      },
      {
        role: 'hideothers',
      },
      {
        role: 'unhide',
      },
      {
        type: 'separator',
      },
      {
        role: 'quit',
      },
    ],
  },
  {
    label: 'File',
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo',
      },
      {
        role: 'redo',
      },
      {
        type: 'separator',
      },
      {
        role: 'cut',
      },
      {
        role: 'copy',
      },
      {
        role: 'paste',
      },
      {
        role: 'pasteandmatchstyle',
      },
      {
        role: 'delete',
      },
      {
        role: 'selectall',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',

        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload()
          }
        },
      },
    ],
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize',
      },
      {
        role: 'close',
      },
      {
        type: 'separator',
      },
      {
        type: 'separator',
      },
      {
        role: 'front',
      },
      {
        role: 'togglefullscreen',
      },
    ],
  },
  {
    role: 'help',
    submenu: helpSubmenu,
  },
]

const otherTpl: electron.MenuItemConstructorOptions[] = [
  {
    label: 'File',
    submenu: [
      {
        role: 'quit',
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo',
      },
      {
        role: 'redo',
      },
      {
        type: 'separator',
      },
      {
        role: 'cut',
      },
      {
        role: 'copy',
      },
      {
        role: 'paste',
      },
      {
        role: 'pasteandmatchstyle',
      },
      {
        role: 'delete',
      },
      {
        type: 'separator',
      },
      {
        role: 'selectall',
      },
    ],
  },
  {
    label: 'View',
  },
  {
    role: 'help',
    submenu: helpSubmenu,
  },
]
const tpl = process.platform === 'darwin' ? darwinTpl : otherTpl
const appMenu = electron.Menu.buildFromTemplate(tpl)
export default appMenu
