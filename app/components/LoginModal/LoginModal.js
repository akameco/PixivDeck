// @flow
import React, {Component} from 'react'
import Loading from '../common/Loading'
import styles from './LoginModal.css'

export type Props = {
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

		const {username, password} = this.state

		return (
			<div className={styles.wrap}>
				{isLoginFailure && <ErrorNotify/>}
				<div className={styles.feild}>
					<input
						placeholder="ユーザー名"
						type="text"
						value={username}
						onChange={this.handleChangeName}
						className={styles.input}
						/>
					<input
						placeholder="パスワード"
						type="password"
						value={password}
						onChange={this.handleChangePassword}
						className={styles.input}
						/>
					<LoginButton onClick={this.handleClick}/>
				</div>
			</div>
		)
	}
}

const LoginButton = ({onClick}: {onClick: () => void}) => (
	<button onClick={onClick} className={styles.submit}>
		ログイン
	</button>
)

const LoginLoading = () => (
	<div className={styles.wrap}>
		<div className={styles.feild}>
			<Loading/>
			<button className={styles.submit}>
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
