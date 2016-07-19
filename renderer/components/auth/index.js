// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './auth.css';

type Props = {
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

	handleChangeName = (event: any) => {
		this.setState({name: event.target.value});
	}

	handleChangePassword = (event: any) => {
		this.setState({password: event.target.value});
	}

	handleClick = () => {
		this.props.onClick(this.state.name, this.state.password);
	}

	render() {
		return (
			<div styleName="wrap">
				<div styleName="base">
					<div styleName="title">
						PixivDeckにログイン
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

					<button onClick={this.handleClick}>
						ログイン
					</button>
				</div>
			</div>
		);
	}
}
