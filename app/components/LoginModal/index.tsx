import React, { Component } from 'react'
import styled from 'styled-components'
import { injectIntl, IntlShape } from 'react-intl'
import LoginButton from './LoginButton'
import Loading from './Loading'
import ErrorNotify from './ErrorNotify'
import Input from './Input'
import Feild from './Feild'
import messages from './messages'

interface InjectProp {
  intl: IntlShape
}

export interface Props {
  username: string
  password: string
  isLoginFailure: boolean
  isLoading: boolean
  onClick: (username: string, password: string) => undefined
}

interface State {
  username: string
  password: string
}

const Wrap = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 3rem;
`

class LoginModal extends Component<Props & InjectProp, State> {
  state: State = {
    username: this.props.username,
    password: this.props.password,
  }
  handleChangeName = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        username: event.target.value,
      })
    }
  }
  handleChangePassword = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        password: event.target.value,
      })
    }
  }
  handleClick = () => {
    this.props.onClick(this.state.username, this.state.password)
  }

  render() {
    const { isLoginFailure, isLoading, intl } = this.props

    if (isLoading) {
      return <Loading />
    }

    const { username, password } = this.state
    return (
      <Wrap>
        {isLoginFailure && <ErrorNotify />}
        <Feild>
          <Input
            placeholder={intl.formatMessage(messages.username)}
            type="text"
            value={username}
            onChange={this.handleChangeName}
          />
          <Input
            placeholder={intl.formatMessage(messages.password)}
            type="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <LoginButton onClick={this.handleClick} />
        </Feild>
      </Wrap>
    )
  }
}

export default injectIntl(LoginModal)
