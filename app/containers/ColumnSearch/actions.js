// @flow
import type { Action } from './actionTypes'
import {
  ADD_COLUMN,
  ADD_COLUMN_SUCCESS,
  FETCH,
  START_WATCH,
  WATCH_NEW,
  FETCH_NEW,
  RESET_IDS,
  FETCH_NEXT,
  SET_NEXT_URL,
  FETCH_SUCCESS,
  FETCH_NEXT_SUCCESS,
  FETCH_NEW_SUCCESS,
  SET_MIN_BOOKBOOK,
  SET_USERS_IN,
  USERS_IN,
  SET_INTERVAL,
  FETCH_FAILRE,
  FETCH_NEXT_FAILRE,
  FETCH_NEW_FAILRE,
} from './constants'
import type { ColumnId } from './reducer'

export function addColumn(id: ColumnId): Action {
  return {
    type: ADD_COLUMN,
    id,
  }
}

export function addColumnSuccess(id: ColumnId): Action {
  return {
    type: ADD_COLUMN_SUCCESS,
    id,
  }
}

export function fetch(id: ColumnId): Action {
  return {
    type: FETCH,
    id,
  }
}

export function startWatch(id: ColumnId): Action {
  return {
    type: START_WATCH,
    id,
  }
}

export function watchNew(id: ColumnId): Action {
  return {
    type: WATCH_NEW,
    id,
  }
}

export function fetchNew(id: ColumnId): Action {
  return {
    type: FETCH_NEW,
    id,
  }
}

export function resetIds(id: ColumnId): Action {
  return {
    type: RESET_IDS,
    id,
  }
}

export function fetchNext(id: ColumnId): Action {
  return {
    type: FETCH_NEXT,
    id,
  }
}

export function setNextUrl(id: ColumnId, nextUrl: ?string): Action {
  return {
    type: SET_NEXT_URL,
    id,
    nextUrl,
  }
}

export function fetchSuccess(id: ColumnId, ids: Array<number>): Action {
  return {
    type: FETCH_SUCCESS,
    id,
    ids,
  }
}

export function fetchNextSuccess(id: ColumnId, ids: Array<number>): Action {
  return {
    type: FETCH_NEXT_SUCCESS,
    id,
    ids,
  }
}

export function fetchNewSuccess(id: ColumnId, ids: Array<number>): Action {
  return {
    type: FETCH_NEW_SUCCESS,
    id,
    ids,
  }
}

export function setMinBookbook(id: ColumnId, minBookmarks: number): Action {
  return {
    type: SET_MIN_BOOKBOOK,
    id,
    minBookmarks,
  }
}

export function setUsersIn(id: ColumnId, usersIn: number): Action {
  return {
    type: SET_USERS_IN,
    id,
    usersIn,
  }
}

export function usersIn(id: ColumnId, usersIn: number): Action {
  return {
    type: USERS_IN,
    id,
    usersIn,
  }
}

export function setInterval(id: ColumnId, interval: number): Action {
  return {
    type: SET_INTERVAL,
    id,
    interval,
  }
}

export function fetchFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_FAILRE,
    id,
    error,
  }
}

export function fetchNextFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_NEXT_FAILRE,
    id,
    error,
  }
}

export function fetchNewFailre(id: ColumnId, error: string): Action {
  return {
    type: FETCH_NEW_FAILRE,
    id,
    error,
  }
}
