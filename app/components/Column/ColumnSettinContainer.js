// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import { setColumnMinBookmarks } from 'actions'
import ColumnSetting, { type Props } from './ColumnSetting'

type OP = {
  minBookmarks: number,
  id: string,
}

const mapStateToDispatch = (dispatch: Dispatch, { id }: OP) => ({
  setColumnMinBookmarks(value: number) {
    dispatch(setColumnMinBookmarks(id, value))
  },
})

const connector: Connector<OP, Props> = connect(undefined, mapStateToDispatch)
export default connector(ColumnSetting)
