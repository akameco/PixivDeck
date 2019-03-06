// @flow
import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from 'components/common/Button'
import messages from './messages'

export interface Props {
  onClick: () => void;
}

const AddColumnButton = ({ onClick }: Props) => (
  <a style={{ margin: '0 10px' }} onClick={onClick}>
    <Button label={<FormattedMessage {...messages.addColumn} />} />
  </a>
)

export default AddColumnButton
