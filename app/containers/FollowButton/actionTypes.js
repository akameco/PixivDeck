// @flow
export type FOLLOW_REQUEST_TYPE = 'FollowButton/FOLLOW_REQUEST'
export type FOLLOW_SUCCESS_TYPE = 'FollowButton/FOLLOW_SUCCESS'
export type FOLLOW_FAILER_TYPE = 'FollowButton/FOLLOW_FAILER'

export type UN_FOLLOW_REQUEST_TYPE = 'FollowButton/UN_FOLLOW_REQUEST'
export type UN_FOLLOW_SUCCESS_TYPE = 'FollowButton/UN_FOLLOW_SUCCESS'
export type UN_FOLLOW_FAILER_TYPE = 'FollowButton/UN_FOLLOW_FAILER'

export type Action =
  | {|
      +type: FOLLOW_REQUEST_TYPE | UN_FOLLOW_REQUEST_TYPE,
      +id: number,
      +restrict: 'public' | 'private',
    |}
  | {|
      +type: FOLLOW_SUCCESS_TYPE | UN_FOLLOW_SUCCESS_TYPE,
      +restrict: 'public' | 'private',
    |}
  | {|
      +type: FOLLOW_FAILER_TYPE | UN_FOLLOW_FAILER_TYPE,
      +error: string,
    |}
