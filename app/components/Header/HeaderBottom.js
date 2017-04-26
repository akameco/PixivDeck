// @flow
import React from 'react'
import styled from 'styled-components'
import Dropdwon from './Dropdown'
import HeaderButton from './HeaderButton'

const Wrap = styled.div`
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 20px;
`

type Props = {
  onToggleDropdown: () => void,
  onOpenFilterModal: () => void,
  onLogout: () => void,
  isDropdown: boolean,
}

const HeaderBottom = ({
  onLogout,
  onToggleDropdown,
  onOpenFilterModal,
  isDropdown,
}: Props) => (
  <Wrap>
    <HeaderButton iconType="setting" onClick={onToggleDropdown} />
    {isDropdown &&
      <Dropdwon onLogout={onLogout} onOpenFilterModal={onOpenFilterModal} />}
  </Wrap>
)

export default HeaderBottom
