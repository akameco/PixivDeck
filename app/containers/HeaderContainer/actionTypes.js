// @flow
export type TOGGLE_SEARCH_FIELD_TYPE = 'HeaderContainer/toggleSearchField'
export type CLOSE_SEARCH_FIELD_TYPE = 'HeaderContainer/closeSearchField'

export type TOGGLE_DROPDOWN_TYPE = 'HeaderContainer/toggleDropdown'
export type CLOSE_DROPDOWN_TYPE = 'HeaderContainer/closeDropdown'

export type Action = {
  +type:
    | TOGGLE_SEARCH_FIELD_TYPE
    | CLOSE_SEARCH_FIELD_TYPE
    | TOGGLE_DROPDOWN_TYPE
    | CLOSE_DROPDOWN_TYPE,
}
