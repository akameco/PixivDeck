import * as React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

const Notice = styled.div`
  display: block;
  background-color: #b13232;
  margin: 20px 5px;
  padding: 5px;
  color: #fff;
  border-radius: 2px;
  text-align: center;
  vertical-align: bottom;
`

const ErrorNotify = () => (
  <Notice>
    <p>
      <FormattedMessage {...messages.error} />
      <br />
      <FormattedMessage {...messages.errorInfo} />
    </p>
  </Notice>
)

export default ErrorNotify
