// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import throttle from 'lodash.throttle'
import Pixiv from '../../api/pixiv'
import PopoverAuto from './PopoverAuto'
import UsersOver from './UsersOver'

export type Props = {
  onClose: () => void,
  onSubmit: (tag: string) => void,
}

type State = {
  value: string,
  keywords: string[],
}

class SearchField extends Component {
  props: Props
  state: State = { value: '', keywords: [] }

  componentDidMount() {
    window.addEventListener('click', this._handleClose)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleClose)
  }

  handleChange = ({ target }: Event) => {
    if (target instanceof HTMLInputElement) {
      this.setState({ value: target.value })
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

  _autoComplte = throttle(async () => {
    const { value } = this.state
    if (value === '') {
      return
    }
    const { searchAutoCompleteKeywords } = await Pixiv.searchAutoComplete(value)
    this.setState({ keywords: searchAutoCompleteKeywords })
  }, 200)

  handleSubmit = (event: SyntheticKeyboardEvent) => {
    // eslint-disable-line no-undef
    const text = this.state.value.trim()
    if (event.which === 13 && text !== '') {
      this.props.onSubmit(text)
      this.setState({ value: '' })
    }
  }

  handleClick = (keyword: string) => {
    if (keyword !== '') {
      this.props.onSubmit(keyword)
    }
  }

  render() {
    const { keywords, value } = this.state
    return (
      <Wrap>
        <Field>
          <Input
            type="text"
            placeholder="キーワード検索"
            autoFocus
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        </Field>
        {value &&
          <Popup>
            {keywords.length > 0 &&
              <PopoverAuto
                value={value}
                keywords={keywords}
                onClick={this.handleClick}
              />}
            <UsersOver value={value} onClick={this.handleClick} />
          </Popup>}
      </Wrap>
    )
  }
}

const Wrap = styled.div`
	position: relative;
	height: auto;
`

const Field = styled.div`
	position: relative;
	max-width: 400px;
	margin-bottom: 5px;
`

const Input = styled.input`
	font-size: 1.1rem;
	height: 40px;
	width: 100%;
	border: 0;
	margin-top: 10px;
	border-radius: 3px;
	padding-left: 1rem;
	box-sizing: border-box;
`

const Popup = styled.div`
	height: calc(100% - 50px);
	padding: 1px;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.1);
	overflow-y: scroll;
	margin: 0;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`

export default SearchField
