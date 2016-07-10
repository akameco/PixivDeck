// @flow
import {combineReducers} from 'redux';
import manage from './manage';
import columns from './columns';
import entities from './entities';

const rootReducer = combineReducers({
	manage,
	entities,
	columns
});

export default rootReducer;
