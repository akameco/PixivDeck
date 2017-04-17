// @flow
import type {Illust} from './illust';
type Id = number;

export type Popover = {
  illusts: Array<Illust>,
};

export type PopoverAction =
  | {|type: 'OPEN_USER_POPOVER', id: Id|}
  | {|type: 'ADD_USER_POPOVER_ILLUST', payload: Array<Illust>|}
  | {|type: 'CLEAR_USER_POPOVER_ILLUST'|};
