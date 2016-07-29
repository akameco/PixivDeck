// @flow
/* eslint-disable camelcase */
import 'babel-polyfill';
import os from 'os';
import fs from 'fs';
import {join, resolve} from 'path';
import {app, BrowserWindow, ipcMain, shell} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import Pixiv from 'pixiv.js';
import Store from './store';

let mainWindow;

require('electron-context-menu')();
require('electron-referer')('http://www.pixiv.net/');

function loadExtension(id: string) {
	const extensionDir = resolve(os.homedir(), 'Library/Application Support/Google/Chrome/Default/Extensions/');
	const versions = fs.readdirSync(`${extensionDir}/${id}`).sort();
	const version = versions.pop();
	BrowserWindow.addDevToolsExtension(`${extensionDir}/${id}/${version}`);
}

function createMainWindow() {
	const bounds = new Store('bounds');
	const win = new BrowserWindow(Object.assign({}, {
		title: 'PixivDeck',
		width: 500,
		height: 500
	}, bounds.get()));

	if (process.env.NODE_ENV === 'development') {
		const extensionIds = ['lmhkpmbekcpmknklioeibfkpmmfibljd', 'fmkadmapgofadopljbjfkapdkoienihi'];
		for (const id of extensionIds) {
			loadExtension(id);
		}
		win.openDevTools();

		win.loadURL('http://localhost:8080');
	} else {
		win.loadURL(`file://${join(__dirname, 'index.html')}`);
	}

	win.on('closed', () => {
		mainWindow = null;
	});

	['resize', 'move'].forEach(ev => {
		win.on(ev, () => {
			bounds.set(win.getBounds());
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
	const authStore = new Store('auth');
	let pixiv;

	ipcMain.on('INIT', ev => {
		const auth = authStore.get();
		if (auth && auth.remember) {
			const {name, password} = auth;
			pixiv = new Pixiv(name, password);
			ev.sender.send('SUCCESS_LOGINED');
		}
	});

	ipcMain.on('LOGIN', (ev, {name, password}) => {
		pixiv = new Pixiv(name, password);
		ev.sender.send('SUCCESS_LOGINED');
		authStore.set({name, password, remember: true});
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
		const res = await pixiv.userWorks(userID, opts);
		ev.sender.send('userWorks', {id, res});
	});

	ipcMain.on('work', async (ev, id) => {
		const res = await pixiv.works(id);
		ev.sender.send('work', res);
	});
});
