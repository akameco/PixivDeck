// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import css from 'react-css-modules';
import type {Dispatch, State as S} from '../../../types';
import {login} from '../../../actions';
import Loading from '../../common/Loading';
import styles from './login.css';

type Props = {
	username: string,
	password: string,
	isLoginFailure: bool,
	isLoading: bool,
	onClick: (username: string, password: string) => void
};

type State = {
	username: string,
	password: string,
};

@css(styles)
class LoginModal extends Component {
	props: Props;
	state: State = {
		username: this.props.username,
		password: this.props.password,
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
				<p>
					ログインに失敗しました。
					<br/>
					ユーザ名とパスワードを確認してください。
				</p>
			</div>
		);
	}

	renderLoading() {
		return (
			<div styleName="wrap">
				<div styleName="feild">
					<Loading/>
					<button styleName="submit">
						ログイン中...
					</button>
				</div>
			</div>
		);
	}

	render() {
		const {isLoginFailure, isLoading} = this.props;
		if (isLoading) {
			return this.renderLoading();
		}

		return (
			<div styleName="wrap">
				{isLoginFailure && this.renderErrorNotify()}
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
	return {...state.auth};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onClick: (username, password) => {
			dispatch(login(username, password));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
