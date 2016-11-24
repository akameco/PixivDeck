// @flow
import Auth from '../repo/Auth';
import type {Action, Dispatch} from '../types';

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'INIT') {
		Auth.init();
	}
	return next(action);
};
