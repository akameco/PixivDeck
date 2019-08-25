import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import Submit from './Submit'
import messages from './messages'

interface Props {
  onClick: () => undefined
}

const LoginButton = ({ onClick }: Props) => (
  <Submit onClick={onClick}>
    <FormattedMessage {...messages.login} />
  </Submit>
)

export default LoginButton
