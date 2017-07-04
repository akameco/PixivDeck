// @flow
import React from 'react'
import styled from 'styled-components'
import EventListener from 'react-event-listener'
import SearchField from 'containers/SearchField'
import handleEscCreater from 'utils/handleEscCreater'
import HeaderButton from './HeaderButton'
import { SearchWrap, Wrap } from './styles'
import Dropdwon from '../Dropdown'

export type Props = {
  isDropdown: boolean,
  isSearchField: boolean,
  toggleSearchField: () => void,
  onClickAdd: () => void,
  onToggleDropdown: () => void,
  onOpenFilterModal: () => void,
  onCloseDropdown: Function,
  onLogout: () => void,
}

const Top = styled.div`
  width: 100%;
  text-align: center;
`

const Bottom = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
`

export default function Sidebar(props: Props) {
  const {
    onClickAdd,
    onToggleDropdown,
    onLogout,
    onOpenFilterModal,
    isDropdown,
    isSearchField,
    toggleSearchField,
    onCloseDropdown,
  } = props

  const handleKeyUp = handleEscCreater(toggleSearchField)

  return (
    <Wrap>
      <Top>
        <HeaderButton iconType="add" onClick={onClickAdd} />
        <HeaderButton
          iconType="searchIllust"
          onClick={toggleSearchField}
          IconStyle={isSearchField ? { color: '#dedede' } : {}}
        />
      </Top>

      {isSearchField &&
        <SearchWrap>
          <EventListener target="window" onKeyUp={handleKeyUp} />
          <SearchField />
        </SearchWrap>}

      <Bottom onBlur={onCloseDropdown}>
        <HeaderButton iconType="setting" onClick={onToggleDropdown} />
        {isDropdown &&
          <Dropdwon
            onClose={onCloseDropdown}
            onLogout={onLogout}
            onOpenFilterModal={onOpenFilterModal}
          />}
      </Bottom>
    </Wrap>
  )
}
