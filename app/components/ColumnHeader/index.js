// @flow
import React from 'react'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import HeaderPopover from './HeaderPopover'
import { Header, Item, Title, Wrap } from './styles'

type Props = {
  name: string,
  onTopClick: (event: Event) => void,
  onClose: () => void,
  children?: React$Element<*>,
}

type State = {
  open: boolean,
}

class ColumnHeader extends React.PureComponent {
  props: Props
  state: State = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { onClose, onTopClick, name, children } = this.props
    return (
      <Wrap>
        <Header>
          <Item onClick={this.handleClick}>
            {children &&
              <IconButton>
                <NavigationMenu color={'#999999'} />
              </IconButton>}
          </Item>
          <Title onClick={onTopClick}>
            {name}
          </Title>
          <Item onClick={onClose}>
            <IconButton>
              <NavigationClose color={'#999999'} />
            </IconButton>
          </Item>
        </Header>
        <HeaderPopover open={this.state.open}>
          {children}
        </HeaderPopover>
      </Wrap>
    )
  }
}
export default ColumnHeader
