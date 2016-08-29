// @flow
import type {Store} from '../types';
import ipc from './ipc';
import keyEvent from './key-event';

export default (store: Store) => {
	const wrappers = [
		ipc,
		keyEvent
	];

	wrappers.forEach(wrap => {
		wrap(store);
	});
};
