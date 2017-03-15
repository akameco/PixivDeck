// @flow
import type {Action, State} from 'types';
import type {User, Users} from 'types/user';

const userById = (state: Users = {}, action: Action) => {
  if (action.response && action.response.entities.users) {
    return {
      ...state,
      ...action.response.entities.users,
    };
  }
  return state;
};

export default userById;

export const getUser = (state: State, id: number): User => state.userById[id];
