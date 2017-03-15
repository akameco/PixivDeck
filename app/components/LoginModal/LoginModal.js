// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import Loading from './Loading';
import ErrorNotify from './ErrorNotify';
import Input from './Input';
import Feild from './Feild';

export type Props = {
  username: string,
  password: string,
  isLoginFailure: boolean,
  isLoading: boolean,
  onClick: (username: string, password: string) => void,
};

type State = {
  username: string,
  password: string,
};

export default class LoginModal extends Component {
  props: Props;
  state: State = {
    username: this.props.username,
    password: this.props.password,
  };

  handleChangeName = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({username: event.target.value});
    }
  };

  handleChangePassword = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({password: event.target.value});
    }
  };

  handleClick = () => {
    this.props.onClick(this.state.username, this.state.password);
  };

  render() {
    const {isLoginFailure, isLoading} = this.props;

    if (isLoading) {
      return <Loading />;
    }

    const {username, password} = this.state;

    return (
      <Wrap>
        {isLoginFailure && <ErrorNotify />}
        <Feild>
          <Input
            placeholder="ユーザー名"
            type="text"
            value={username}
            onChange={this.handleChangeName}
          />
          <Input
            placeholder="パスワード"
            type="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <LoginButton onClick={this.handleClick} />
        </Feild>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
	position: relative;
	max-width: 100%;
	margin-top: 2rem;
	margin-left: 3rem;
	margin-right: 3rem;
`;
