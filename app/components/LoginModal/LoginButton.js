// @flow
import React from 'react'
import Submit from './Submit'

type Props = {
	onClick: () => void
}

const LoginButton = ({onClick}: Props) => (
	<Submit onClick={onClick}>
		ログイン
	</Submit>
)

export default LoginButton
