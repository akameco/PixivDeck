import path from 'path';
import fs from 'fs';
import {app} from 'electron';

export default class Store {
	constructor(name) {
		this.path = path.join(app.getPath('userData'), `${name}.json`);
	}

	get() {
		let value;
		try {
			value = JSON.parse(fs.readFileSync(this.path, 'utf8'));
		} catch (e) {
			value = null;
		}
		return value;
	}

	set(data) {
		fs.writeFileSync(this.path, JSON.stringify(data));
	}
}
