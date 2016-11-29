// @flow
import {combineReducers} from 'redux';
import manage from './manage';
import columns from './columns';
import entities from './entities';
import history from './history';
import filter from './filter';
import auth from './auth';

const rootReducer = combineReducers({
	manage,
	entities,
	columns,
	history,
	filter,
	auth,
});

export default rootReducer;
