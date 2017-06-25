// @flow
export type FOLLLOW_REQUEST_TYPE = 'FollowButton/FOLLLOW_REQUEST'

export type UN_FOLLLOW_REQUEST_TYPE = 'FollowButton/UN_FOLLLOW_REQUEST'

export type Action = {|
  +type: FOLLLOW_REQUEST_TYPE | UN_FOLLLOW_REQUEST_TYPE,
  id: number,
|}
