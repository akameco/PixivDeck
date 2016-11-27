// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import css from 'react-css-modules';
import type {Dispatch, State as S} from '../../../types';
import {login} from '../../../actions';
import styles from './login.css';

type Props = {
	username: string,
	password: string,
	isLoginFailure: bool,
	onClick: (username: string, password: string) => void
};

type State = {
	username: string,
	password: string
};

@css(styles)
class LoginModal extends Component {
	props: Props;
	state: State = {
		username: this.props.username,
		password: this.props.password
	};

	handleChangeName = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({username: event.target.value});
		}
	}

	handleChangePassword = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({password: event.target.value});
		}
	}

	handleClick = () => {
		this.props.onClick(this.state.username, this.state.password);
	}

	renderErrorNotify() {
		return (
			<div styleName="notice">
				ログインに失敗しました。
				アカウント名またはパスワードを確認してください。
			</div>
		);
	}

	render() {
		return (
			<div styleName="wrap">
				{this.props.isLoginFailure && this.renderErrorNotify()}
				<div styleName="feild">
					<input
						styleName="input"
						placeholder="ユーザー名"
						type="text"
						value={this.state.username}
						onChange={this.handleChangeName}
						/>
					<input
						styleName="input"
						placeholder="パスワード"
						type="password"
						value={this.state.password}
						onChange={this.handleChangePassword}
						/>

					<button onClick={this.handleClick} styleName="submit">
						ログイン
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: S) {
	const {username, password} = state.auth;
	const {isLoginFailure} = state.manage;
	return {
		username,
		password,
		isLoginFailure
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onClick: (username, password) => {
			dispatch(login(username, password));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
