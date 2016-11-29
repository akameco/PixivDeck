// @flow
/* eslint-disable camelcase */
import electron from 'electron';
import Config from 'electron-config';
import referer from 'electron-referer';
import wallpaper from 'wallpaper';
import {download} from 'electron-dl';
import appMenu from './menu';

const {app, BrowserWindow, ipcMain, shell} = electron;
let mainWindow;

require('electron-context-menu')();

function openTweet(url: string) {
	const win = new BrowserWindow({width: 800, height: 600});

	referer('https://twitter.com', win);

	const page = win.webContents;

	page.on('will-navigate', (event, url) => {
		if (/twitter\.com\/intent\/tweet\/complete/.test(url)) {
			win.close();
		}

		event.preventDefault();
	});

	win.loadURL(url);
}

if (process.env.NODE_ENV === 'development') {
	require('electron-debug')();
}

const config = new Config({
	defaults: {
		bounds: {
			width: 960,
			height: 680,
		},
	},
});

function createMainWindow() {
	const lastWindowState = config.get('bounds');
	const win = new BrowserWindow({
		title: 'PixivDeck',
		width: lastWindowState.width,
		height: lastWindowState.height,
		x: lastWindowState.x,
		y: lastWindowState.y,
	});

	if (process.env.NODE_ENV === 'development') {
		const loadExtensions = async () => {
			const installExtension = require('electron-devtools-installer');

			const install = installExtension.default;
			try {
				await install(installExtension.REACT_DEVELOPER_TOOLS);
				await install(installExtension.REDUX_DEVTOOLS);
			} catch (err) {
				console.error(err);
			}
		};

		loadExtensions();
	}

	win.loadURL(`file://${__dirname}/app/app.html`);

	win.on('closed', () => {
		mainWindow = null;
	});

	['resize', 'move'].forEach(ev => {
		win.on(ev, () => {
			config.set('bounds', win.getBounds());
		});
	});

	const {webContents} = win;

	webContents.on('did-finish-load', () => {
		referer('http://www.pixiv.net', win);
	});

	webContents.on('new-window', (event: Event, url: string) => {
		if (/intent\/twitter/.test(url)) {
			return;
		}
		event.preventDefault();
		shell.openExternal(url);
	});

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
	const page = mainWindow.webContents;

	electron.Menu.setApplicationMenu(appMenu);

	ipcMain.on('tweet', (ev, url) => {
		openTweet(url);
	});

	ipcMain.on('wallpaper', async (ev, img) => {
		const dl = await download(mainWindow, img);
		await wallpaper.set(dl.getSavePath());
	});

	app.on('before-quit', () => {
		page.send('save');
	});
});
