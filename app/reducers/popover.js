// @flow
import type {Action} from 'types';
import type {Popover} from 'types/popover';

const init: Popover = {
  illusts: [],
};

function popover(state: Popover = init, action: Action): Popover {
  switch (action.type) {
    case 'CLEAR_USER_POPOVER_ILLUST':
      return {illusts: []};
    case 'ADD_USER_POPOVER_ILLUST':
      return {illusts: action.payload};
    default:
      return state;
  }
}

export default popover;
