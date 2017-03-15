// @flow
import type {Store} from 'types';
import keyEvent from './key-event';
import save from './save';

export default (store: Store) => {
  const wrappers = [keyEvent, save];

  wrappers.forEach(wrap => {
    wrap(store);
  });
};
