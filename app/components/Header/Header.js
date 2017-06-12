// @flow
import React from 'react'
import styled from 'styled-components'
import SearchField from 'components/SearchField'
import HeaderButton from './HeaderButton'
import HeaderBottom from './HeaderBottom'

export type Props = {
  isDropdown: boolean,
  isSearchField: boolean,
  toggleSearchField: () => void,
  onClickAdd: () => void,
  onToggleDropdown: () => void,
  onOpenFilterModal: () => void,
  onLogout: () => void,
}

export default function Header(props: Props) {
  const {
    onClickAdd,
    onToggleDropdown,
    onLogout,
    onOpenFilterModal,
    isDropdown,
    isSearchField,
    toggleSearchField,
  } = props

  return (
    <Wrap>
      <div>
        <HeaderButton iconType="add" onClick={onClickAdd} />
        <HeaderButton
          iconType="searchIllust"
          onClick={toggleSearchField}
          IconStyle={isSearchField ? { color: '#dedede' } : {}}
        />
      </div>
      {isSearchField && <SearchWrap><SearchField /></SearchWrap>}
      <HeaderBottom
        isDropdown={isDropdown}
        onLogout={onLogout}
        onToggleDropdown={onToggleDropdown}
        onOpenFilterModal={onOpenFilterModal}
      />
    </Wrap>
  )
}

const Wrap = styled.header`
  display: flex;
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  flex-direction: column;
  flex-flow: nowrap;
  width: 50px;
  height: 100%;
  background-color: #292f33;
`

const SearchWrap = styled.div`
  position: fixed;
  top: 35px;
  left: 50px;
  width: auto;
  min-width: 260px;
  height: 100%;
`
