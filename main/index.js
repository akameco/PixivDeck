/* eslint-disable camelcase */
import 'babel-polyfill';
import os from 'os';
import fs from 'fs';
import {join, resolve} from 'path';
import {app, BrowserWindow, ipcMain} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import Pixiv from 'pixiv.js';
import Store from './store';

let mainWindow;

function loadExtension(id: string) {
	const extensionDir = resolve(os.homedir(), 'Library/Application Support/Google/Chrome/Default/Extensions/');
	const versions = fs.readdirSync(`${extensionDir}/${id}`).sort();
	const version = versions.pop();
	BrowserWindow.addDevToolsExtension(`${extensionDir}/${id}/${version}`);
}

function createMainWindow() {
	const bounds = new Store('bounds');
	const win = new BrowserWindow(Object.assign({
		title: 'foxiv',
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

	const ses = win.webContents.session;
	ses.webRequest.onBeforeSendHeaders((detail, cb) => {
		let {requestHeaders} = detail;
		requestHeaders = Object.assign({}, requestHeaders, {
			Referer: 'http://www.pixiv.net/'
		});
		cb({requestHeaders});
	}, {
		urls: ['<all_urls>'],
		types: ['xmlhttprequest']
	});

	win.on('closed', () => {
		mainWindow = null;
	});

	['resize', 'move'].forEach(ev => {
		win.on(ev, () => {
			bounds.set(win.getBounds());
		});
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
	const {NAME, PASS} = process.env;
	const pixiv = new Pixiv(NAME, PASS);
	mainWindow = createMainWindow();

	ipcMain.on('ranking', async (ev, opts = {}) => {
		const res = await pixiv.ranking('all', Object.assign({page: 1, per_page: 50}, opts));
		mainWindow.webContents.send('ranking', res);
	});

	ipcMain.on('work', async (ev, id) => {
		const res = await pixiv.works(id);
		mainWindow.webContents.send('work', res);
	});
});
