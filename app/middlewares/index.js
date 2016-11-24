// @flow
import save from './save';
import auth from './auth';
import api from './api';

const root: Array<any> = [
	save,
	auth,
	api
];

export default root;
