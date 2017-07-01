// @flow
import React from 'react'
import EventListener from 'react-event-listener'
import SearchField from 'containers/SearchField'
import handleEscCreater from 'util/handleEscCreater'
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
  onCloseDropdown: Function,
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
    onCloseDropdown,
  } = props

  const handleKeyUp = handleEscCreater(toggleSearchField)

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
          <EventListener target="window" onKeyUp={handleKeyUp} />
          <SearchField />
        </SearchWrap>}
      <HeaderBottom
        isDropdown={isDropdown}
        onLogout={onLogout}
        onClose={onCloseDropdown}
        onToggleDropdown={onToggleDropdown}
        onOpenFilterModal={onOpenFilterModal}
      />
    </Wrap>
  )
}
