// @flow
import history from './history';
import save from './save';
import auth from './auth';
import api from './api';

const root: Array<any> = [
	history,
	save,
	auth,
	api
];

export default root;
