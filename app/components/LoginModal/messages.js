// @flow
import {defineMessages} from 'react-intl';

export default defineMessages({
  error: {
    id: 'components.LoginModal.ErrorNotify.error',
    defaultMessage: 'ログインに失敗しました。',
  },
  errorInfo: {
    id: 'components.LoginModal.ErrorNotify.errorInfo',
    defaultMessage: 'ユーザ名とパスワードを確認してください。',
  },
  login: {
    id: 'components.LoginModal.LoginButton',
    defaultMessage: 'ログイン',
  },
  loginLoading: {
    id: 'components.LoginModal.Loading',
    defaultMessage: 'ログイン中..',
  },
});
