// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './auth.css';

type Props = {
	isLoginSuccess: bool,
	onClick: (name: string, password: string) => void,
};

type State = {
	name: string,
	password: string
};

@css(styles)
export default class Auth extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};
	}

	handleChangeName = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({name: event.target.value});
		}
	}

	handleChangePassword = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({password: event.target.value});
		}
	}

	handleClick = () => {
		this.props.onClick(this.state.name, this.state.password);
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
				{!this.props.isLoginSuccess && this.renderErrorNotify()}
				<div styleName="base">
					<div styleName="title">
						PixivDeck
					</div>
					<input
						placeholder="ユーザー名"
						type="text"
						value={this.state.name}
						onChange={this.handleChangeName}
						/>
					<input
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
