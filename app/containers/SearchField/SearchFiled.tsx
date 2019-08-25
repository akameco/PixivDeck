import React, { Component } from 'react'
import { injectIntl, IntlShape } from 'react-intl'
import { findDOMNode } from 'react-dom'
import { throttle } from 'lodash'
import PopoverAuto from './PopoverAuto'
import UsersOver from './UsersOver'
import messages from './messages'
import { Field, Input, Popup, Wrap } from './styles'

interface InjectProp {
  intl: IntlShape
}
export interface Props {
  keywords: string[]
  onClose: () => undefined
  onFetch: (word: string) => undefined
  onSubmit: (tag: string) => undefined
}
interface State {
  value: string
}

class SearchField extends Component<Props & InjectProp, State> {
  state: State = {
    value: '',
    keywords: [],
  }

  componentDidMount() {
    window.addEventListener('click', this._handleClose)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleClose)
  }

  handleChange = ({ target }: Event) => {
    if (target instanceof HTMLInputElement) {
      this.setState({
        value: target.value,
      })

      this._autoComplte()
    }
  }
  _handleClose = (event: any) => {
    event.preventDefault()
    let node = event.target

    while (node) {
      if (node === findDOMNode(this)) {
        return
      }

      node = node.parentNode
    }

    this.props.onClose()
  }
  _autoComplte = throttle(() => {
    const { value } = this.state

    if (value === '') {
      return
    }

    this.props.onFetch(value)
  }, 200)
  handleSubmit = (event: SyntheticKeyboardEvent) => {
    // eslint-disable-line no-undef
    const text = this.state.value.trim()

    if (event.which === 13 && text !== '') {
      this.props.onSubmit(text)
      this.setState({
        value: '',
      })
    }
  }
  handleClick = (keyword: string) => {
    if (keyword !== '') {
      this.props.onSubmit(keyword)
    }
  }

  render() {
    const { intl, keywords } = this.props
    const { formatMessage } = intl
    const { value } = this.state
    return (
      <Wrap>
        <Field>
          <Input
            type="text"
            placeholder={formatMessage(messages.keywordSearch)}
            autoFocus
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        </Field>
        <Popup>
          {keywords.length > 0 && (
            <PopoverAuto
              value={value}
              keywords={keywords}
              onClick={this.handleClick}
            />
          )}
          {value && <UsersOver value={value} onClick={this.handleClick} />}
        </Popup>
      </Wrap>
    )
  }
}

export default injectIntl(SearchField)
