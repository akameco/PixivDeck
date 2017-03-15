// @flow
import type {Action} from 'types';
import type {Illust} from 'types/illust';
import * as Actions from 'constants/popover';

export const clearUserPopoverIllust = (): Action => ({
  type: Actions.CLEAR_USER_POPOVER_ILLUST,
});

export const addUserPopoverIllust = (payload: Array<Illust>): Action => ({
  type: Actions.ADD_USER_POPOVER_ILLUST,
  payload,
});
