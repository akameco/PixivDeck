// @flow

export type AddColumnAction =
  | {| type: 'ADD_COLUMN_BOOKMARK', isPublic: boolean |}
  | {| type: 'ADD_COLUMN_FOLLOW', isPublic: boolean |}
  | {| type: 'ADD_COLUMN_RANKING', mode: $Subtype<string> |}
  | {| type: 'ADD_COLUMN_R18_RANKING', mode: $Subtype<string> |}
  | {|
      type: 'ADD_COLUMN_USER_ILLUSTS',
      userId: number,
      name: string,
      account: string,
    |}
