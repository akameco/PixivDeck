// @flow
import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '../Icons/DeleteIcon'

export type Props = {
  children?: ?React$Element<*>,
  onClick?: Function,
  onRequestDelete?: Function,
}

const StyledChip = styled.div`
  display: flex;
  box-sizing: border-box;
  cursor: default;
  text-decoration: none;
  border: 10px;
  margin: 4px;
  padding: 0;
  position: relative;
  background-color: rgb(244, 244, 244);
  font-size: inherit;
  width: -webkit-fit-content;
  vertical-align: baseline;
  border-radius: 16px;
`

const InnerChip = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  line-height: 32px;
  font-weight: 400;
  line-height: 32px;
  padding-right: 12px;
  padding-left: 12px;
  user-select: none;
  white-space: nowrap;
`

const icnonStyle = {
  cursor: 'pointer',
  margin: '4px 4px 0px -8px',
}

class Chip extends React.PureComponent {
  props: Props

  handleRequestDelete = (e: Event) => {
    e.stopPropagation()
    if (this.props.onRequestDelete) {
      this.props.onRequestDelete(e)
    }
  }

  render() {
    const { onClick, onRequestDelete, children } = this.props

    return (
      <StyledChip>
        <InnerChip onClick={onClick}>
          {children}
        </InnerChip>
        {onRequestDelete &&
          <div onClick={this.handleRequestDelete}>
            <DeleteIcon
              type="chip"
              color="rgba(0, 0, 0, 0.25)"
              size={24}
              style={icnonStyle}
            />
          </div>}
      </StyledChip>
    )
  }
}

export default Chip
