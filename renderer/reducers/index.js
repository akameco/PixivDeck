// @flow
import {combineReducers} from 'redux';
import manage from './manage';
import columns from './columns';
import entities from './entities';
import filter from './filter';

const rootReducer = combineReducers({
	manage,
	entities,
	columns,
	filter
});

export default rootReducer;
