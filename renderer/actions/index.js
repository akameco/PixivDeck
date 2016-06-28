import {ipcRenderer} from 'electron';

export function ranking(mode = 'daily') {
	ipcRenderer.send('ranking');
	return {
		type: 'loading'
	};
}

export function receiveWorks(res) {
	return {
		type: 'receive:works',
		works: res
	};
}
