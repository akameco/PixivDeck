// @flow
import type {Action} from 'types'
import type {Illust, Illusts} from 'types/illust'

const illustById = (state: Illusts = {}, action: Action) => {
	if (action.response && action.response.entities.illusts) {
		return {
			...state,
			...action.response.entities.illusts,
		}
	}
	return state
}

export default illustById

export const getIllust = (state: Illusts, id: number): Illust => state[id]
