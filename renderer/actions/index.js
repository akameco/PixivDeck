import {ipcRenderer} from 'electron';

export function ranking(mode = 'daily') {
	ipcRenderer.send('ranking');
	return {
		type: 'loading'
	};
}

export function currentWork(id) {
	return {
		type: 'currentWork',
		id
	};
}

export function toggleModal() {
	return {
		type: 'toggleModal'
	};
}

export function closeModal() {
	return {
		type: 'closeModal'
	};
}

export function receiveWorks(res) {
	return {
		type: 'receive:works',
		works: res
	};
}
