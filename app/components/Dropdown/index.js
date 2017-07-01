// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'
import EventListener from 'react-event-listener'
import handleEscCreater from 'services/handleEscCreater'
import Item from './Item'
import { H, Wrap } from './styles'
import messages from './messages'

type Props = {
  onOpenFilterModal: () => void,
  onLogout: () => void,
  onClose: Function,
}

  <Wrap>
const Dropdwon = ({ onOpenFilterModal, onLogout, onClose }: Props) =>
    <EventListener target="window" onKeyUp={handleEscCreater(onClose)} />
    <Item
      onClick={onOpenFilterModal}
      text={<FormattedMessage {...messages.setting} />}
    />
    <H />
    <Item onClick={onLogout} text={<FormattedMessage {...messages.logout} />} />
  </Wrap>

export default Dropdwon
