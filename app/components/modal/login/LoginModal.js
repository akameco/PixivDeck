// @flow
import React, {Component} from 'react'
import css from 'react-css-modules'
import Loading from '../../common/Loading'
import styles from './LoginModal.css'

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
export default class LoginModal extends Component {
	props: Props;
	state: State = {
		username: this.props.username,
		password: this.props.password,
	};

	handleChangeName = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({username: event.target.value})
		}
	}

	handleChangePassword = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			this.setState({password: event.target.value})
		}
	}

	handleClick = () => {
		this.props.onClick(this.state.username, this.state.password)
	}

	render() {
		const {isLoginFailure, isLoading} = this.props

		if (isLoading) {
			return <LoginLoading/>
		}

		return (
			<div styleName="wrap">
				{isLoginFailure && <ErrorNotify/>}
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
		)
	}
}

const LoginLoading = () => (
	<div className={styles.wrap}>
		<div className={styles.feild}>
			<Loading/>
			<button className={styles.ubmit}>
				ログイン中...
			</button>
		</div>
	</div>
)

const ErrorNotify = () => (
	<div className={styles.notice}>
		<p>
			ログインに失敗しました。
			<br/>
			ユーザ名とパスワードを確認してください。
		</p>
	</div>
)
