// @flow
import type {Illusts, Action, Illust} from '../types'

const illustById = (state: Illusts = {}, action: Action) => {
	if (action.response) {
		return {
			...state,
			...action.response.entities.illusts,
		}
	}
	return state
}

export default illustById

export const getIllust = (state: Illusts, id: number): Illust => state[id]
