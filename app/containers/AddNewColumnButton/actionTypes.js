// @flow
import type { User } from '../../types/user'

export type ADD_USER_ILLUST_TYPE = 'AddNewColumnButton/ADD_USER_ILLUST'

export type Action = {|
  +type: ADD_USER_ILLUST_TYPE,
  +user: User,
|}
