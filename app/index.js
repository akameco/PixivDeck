// @flow
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import jaLocaleData from 'react-intl/locale-data/ja';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import type {State} from 'types';
import App from 'containers/App/';
import configureStore from './store';
import Api from './api';

import './global-styles'; // eslint-disable-line

injectTapEventPlugin();

addLocaleData(jaLocaleData);

async function init() {
  const storage: ?string = localStorage.getItem('store');
  let initialState: $Shape<State> = storage ? JSON.parse(storage) : {};

  const {auth, columns} = initialState;

  if (auth && auth.username && auth.password) {
    await Api.login(auth.username, auth.password);
  } else if (columns) {
    initialState = {columns: initialState.columns};
  }

  const store = configureStore(initialState);

  render(
    <Provider store={store}>
      <IntlProvider local="ja">
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>,
    document.querySelector('#root')
  );
}

init();
