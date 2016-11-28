// @flow
import type {Action} from '../types';

export function openUserDrawer(id: number): Action {
	return {type: 'OPEN_DRAWER', id};
}
