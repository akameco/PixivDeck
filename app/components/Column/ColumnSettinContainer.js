// @flow
import {connect} from 'react-redux'
import type {Dispatch} from 'types'
import {setColumnMinBookmarks} from 'actions'
import ColumnSetting from './ColumnSetting'

export default connect(undefined, (dispatch: Dispatch, {id}: {id: number}) => ({
	setColumnMinBookmarks(value: number) {
		dispatch(setColumnMinBookmarks(id, value))
	},
}))(ColumnSetting)
