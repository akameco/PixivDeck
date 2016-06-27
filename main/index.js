import {join} from 'path';
import {app, BrowserWindow} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import Store from './store';

let mainWindow;

function createMainWindow() {
	const bounds = new Store('bounds');
	const win = new BrowserWindow(Object.assign({
		title: 'foxiv',
		width: 500,
		height: 500
	}, bounds.get()));

	if (process.env.NODE_ENV === 'development') {
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
});
