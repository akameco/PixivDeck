// @flow
import {ipcRenderer} from 'electron';

type Name = string;
type Password = string;

export default class Auth {
	static init() {
		ipcRenderer.send('init');
	}
	static login(name: Name, password: Password): void {
		ipcRenderer.send('login', {name, password});
	}
	static logout() {
		ipcRenderer.send('logout');
	}
}
