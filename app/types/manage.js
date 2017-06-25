// @flow
export type Manage = {|
  isLoading: boolean,
  currentIllustId: ?number,
|}

export type ManageAction =
  | {| type: 'SET_CURRENT_ILLUST', id: number |}
  | {| type: 'START_LOADING' |}
