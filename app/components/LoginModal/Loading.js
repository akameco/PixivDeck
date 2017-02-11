// @flow
import React from 'react'
import styled from 'styled-components'
import Loading from '../common/Loading'
import Feild from './Feild'
import Submit from './Submit'

const Wrap = styled.div`
	position: relative;
	max-width: 100%;
	margin-top: 2rem;
	margin-left: 3rem;
	margin-right: 3rem;
`

const LoginLoading = () => (
	<Wrap>
		<Feild>
			<Loading/>
			<Submit>ログイン中...</Submit>
		</Feild>
	</Wrap>
)

export default LoginLoading
