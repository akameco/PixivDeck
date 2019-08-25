import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import EventListener from 'react-event-listener'
import handleEscCreater from 'utils/handleEscCreater'
import Item from './Item'
import { H, Wrap } from './styles'
import messages from './messages'

interface Props {
  onOpenFilterModal: () => undefined
  onLogout: () => undefined
  onClose: Function
}

const Dropdwon = ({ onOpenFilterModal, onLogout, onClose }: Props) => (
  <Wrap>
    <EventListener
      target="window"
      onKeyUp={handleEscCreater(onClose)}
      onClick={onClose}
    />
    <Item
      onClick={onOpenFilterModal}
      text={<FormattedMessage {...messages.setting} />}
    />
    <H />
    <Item onClick={onLogout} text={<FormattedMessage {...messages.logout} />} />
  </Wrap>
)

export default Dropdwon
