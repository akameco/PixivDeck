// @flow
import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Loading from 'components/Loading'
import Feild from './Feild'
import Submit from './Submit'
import messages from './messages'

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
      <Loading />
      <Submit>
        <FormattedMessage {...messages.loginLoading} />
      </Submit>
    </Feild>
  </Wrap>
)

export default LoginLoading
