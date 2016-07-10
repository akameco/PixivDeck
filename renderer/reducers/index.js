// @flow
import {combineReducers} from 'redux';
import {merge} from 'lodash';
import manage from './manage';
import columns from './columns';

function entities(state = {works: {}}, action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}

const rootReducer = combineReducers({
	manage,
	entities,
	columns
});

export default rootReducer;
