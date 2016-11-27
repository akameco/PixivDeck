// @flow
import type {Action, Dispatch} from '../types';

export default () => (next: Dispatch) => (action: Action) => {
	if (/^CLOSE/.test(action.type) &&
		!action.id &&
		action.type !== 'CLOSE_ALL'
	) {
		return next({type: 'CLOSE_ALL'});
	}
	return next(action);
};
