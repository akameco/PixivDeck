// @flow
import {combineReducers} from 'redux'
import manage from './manage'
import columns from './columns'
import entities from './entities'
import history from './history'
import filter from './filter'
import auth from './auth'
import config from './config'

const rootReducer = combineReducers({
	manage,
	entities,
	columns,
	history,
	filter,
	auth,
	config,
})

export default rootReducer
