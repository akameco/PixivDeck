// @flow
import path from 'path';
import fs from 'fs';
import {app} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies

export default class Store {
	path: string;

	constructor(name: string) {
		this.path = path.join(app.getPath('userData'), `${name}.json`);
	}

	get() {
		let value: any;
		try {
			value = JSON.parse(fs.readFileSync(this.path, 'utf8'));
		} catch (err) {
			value = null;
		}
		return value;
	}

	set(data: Object) {
		fs.writeFileSync(this.path, JSON.stringify(data));
	}
}
