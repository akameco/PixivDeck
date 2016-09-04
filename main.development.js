// @flow
/* eslint-disable camelcase */
import electron from 'electron';
import Config from 'electron-config';
import Pixiv from 'pixiv.js';
import PixivAppApi from 'pixiv-app-api';
import referer from 'electron-referer';
import appMenu from './menu';

const {app, BrowserWindow, ipcMain, shell} = electron;
let mainWindow;

require('electron-context-menu')();

function openTweet(url: string) {
	const win = new BrowserWindow({width: 600, height: 400});

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

	const auth = config.get('auth');
	let pixiv;
	let pixivApp;

	page.on('dom-ready', () => {
		if (!(auth && auth.name && auth.password)) {
			page.send('logout');
		}
	});

	ipcMain.on('INIT', ev => {
		if (auth && auth.remember && auth.name && auth.password) {
			const {name, password} = auth;
			pixiv = new Pixiv(name, password);
			pixivApp = new PixivAppApi(name, password);
			ev.sender.send('SUCCESS_LOGINED');
		}
	});

	ipcMain.on('LOGIN', (ev, {name, password}) => {
		pixiv = new Pixiv(name, password);
		ev.sender.send('SUCCESS_LOGINED');
		config.set('auth', {name, password, remember: true});
	});

	ipcMain.on('bookmark', async (ev, {id, isPrivate}) => {
		if (isPrivate) {
			await pixivApp.illustBookmarkAdd(id, {restrict: 'private'});
		} else {
			await pixivApp.illustBookmarkAdd(id);
		}
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

	ipcMain.on('tweet', (ev, url) => {
		openTweet(url);
	});

	ipcMain.on('open-pixiv', (ev, id) => {
		shell.openExternal(`http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`);
	});
});
