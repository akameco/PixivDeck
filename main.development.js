// @flow
/* eslint-disable camelcase */
import electron from 'electron';
import Config from 'electron-config';
import Pixiv from 'pixiv.js';

const {app, BrowserWindow, ipcMain, shell} = electron;
let mainWindow;

require('electron-context-menu')();
require('electron-referer')('http://www.pixiv.net/');

if (process.env.NODE_ENV === 'development') {
	require('electron-debug')();
}

const config = new Config({
	defaults: {
		bounds: {
			width: 960,
			height: 680
		}
	}
});

function createMainWindow() {
	const lastWindowState = config.get('bounds');
	const win = new BrowserWindow({
		title: 'PixivDeck',
		width: lastWindowState.width,
		height: lastWindowState.height,
		x: lastWindowState.x,
		y: lastWindowState.y
	});

	if (process.env.NODE_ENV === 'development') {
		const loadDevtool = require('electron-load-devtool');

		loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
		loadDevtool(loadDevtool.REDUX_DEVTOOLS);
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
	webContents.on('new-window', (event: Event, url: string) => {
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

	const auth = config.get('auth');
	let pixiv;

	page.on('dom-ready', () => {
		if (!(auth && auth.name && auth.password)) {
			page.send('logout');
		}
	});

	ipcMain.on('INIT', ev => {
		if (auth && auth.remember && auth.name && auth.password) {
			const {name, password} = auth;
			pixiv = new Pixiv(name, password);
			ev.sender.send('SUCCESS_LOGINED');
		}
	});

	ipcMain.on('LOGIN', (ev, {name, password}) => {
		pixiv = new Pixiv(name, password);
		ev.sender.send('SUCCESS_LOGINED');
		config.set('auth', {name, password, remember: true});
	});

	ipcMain.on('ranking', async (ev, {id, opts}) => {
		const res = await pixiv.ranking('all', Object.assign({page: 1, per_page: 50, include_sanity_level: true}, opts));
		ev.sender.send('ranking', {id, res: res.response[0]});
	});

	ipcMain.on('favoriteWorks', async (ev, {id, opts}) => {
		const res = await pixiv.favoriteWorks(Object.assign({}, {per_page: 50, include_stats: true}, opts));
		ev.sender.send('favoriteWorks', {id, res});
	});

	ipcMain.on('search', async (ev, {id, q, opts}) => {
		const res = await pixiv.search(q, Object.assign({}, {mode: 'tag', per_page: 20}, opts));
		ev.sender.send('search', {id, res});
	});

	ipcMain.on('userWorks', async (ev, {id, userID, opts}) => {
		const res = await pixiv.usersWorks(userID, opts);
		ev.sender.send('userWorks', {id, res});
	});

	ipcMain.on('work', async (ev, id) => {
		const res = await pixiv.works(id);
		ev.sender.send('work', res);
	});
});
