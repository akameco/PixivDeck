// @flow
import type {Action, Dispatch} from '../types'

function addHistory(id: number): Action {
	return {type: 'ADD_HISTORY', id}
}

export function currentIllust(
	id: number
): (dispatch: Dispatch) => void {
	return dispatch => {
		dispatch({type: 'SELECT_WORK', id})
		dispatch(addHistory(id))
	}
}
