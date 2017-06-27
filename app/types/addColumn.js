// @flow

export type AddColumnAction =
  | {| type: 'ADD_COLUMN_BOOKMARK' | 'ADD_COLUMN_FOLLOW', isPublic: boolean |}
  | {|
      type: 'ADD_COLUMN_RANKING' | 'ADD_COLUMN_R18_RANKING',
      mode: $Subtype<string>,
    |}
