// @flow
import React from 'react'
import SearchField from 'containers/SearchField'
import HeaderButton from './HeaderButton'
import HeaderBottom from './HeaderBottom'
import { SearchWrap, Wrap } from './styles'

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
      {isSearchField &&
        <SearchWrap>
          <SearchField />
        </SearchWrap>}
      <HeaderBottom
        isDropdown={isDropdown}
        onLogout={onLogout}
        onToggleDropdown={onToggleDropdown}
        onOpenFilterModal={onOpenFilterModal}
      />
    </Wrap>
  )
}
