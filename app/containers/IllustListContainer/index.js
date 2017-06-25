// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import type { DrawerType } from 'types/drawer'
import { nextDrawerPage } from 'actions/drawer'
import IllustList, { type Props } from 'components/IllustList'

const mapDispatchToProps = (dispatch: Dispatch, { type }) => ({
  onIntersect() {
    dispatch(nextDrawerPage(type))
  },
})

type OP = {
  illusts: Illust[],
  type: DrawerType,
}

const connector: Connector<OP, Props> = connect(undefined, mapDispatchToProps)
export default connector(IllustList)
