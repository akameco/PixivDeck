// @flow
import {connect} from 'react-redux';
import type {Connector} from 'react-redux';
import type {Dispatch, State} from 'types';
import {login} from 'actions';
import LoginModal from './LoginModal';
import type {Props} from './LoginModal';

const mapStateToProps = ({auth}: State) => ({...auth});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick(username, password) {
    dispatch(login(username, password));
  },
});

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(LoginModal);
