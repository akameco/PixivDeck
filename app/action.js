// @flow
import type { Action as UserPopoverContainerAction } from './containers/UserPopoverContainer/actionTypes'

import type { Action as LanguageProviderAction } from './containers/LanguageProvider/actionTypes'

import type { Action as SearchFieldAction } from './containers/SearchField/actionTypes'

export type Action =
  | UserPopoverContainerAction
  | LanguageProviderAction
  | SearchFieldAction
