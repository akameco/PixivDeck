// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Item from './Item'
import { H, Wrap } from './styles'
import messages from './messages'

type Props = {
  onOpenFilterModal: () => void,
  onLogout: () => void,
}

const Dropdwon = ({ onOpenFilterModal, onLogout }: Props) =>
  <Wrap>
    <Item
      onClick={onOpenFilterModal}
      text={<FormattedMessage {...messages.setting} />}
    />
    <H />
    <Item onClick={onLogout} text={<FormattedMessage {...messages.logout} />} />
  </Wrap>

export default Dropdwon
