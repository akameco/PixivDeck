// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import type { DrawerType } from 'types/drawer'
import { nextDrawerPage } from 'actions/drawer'
import IllustList, { type Props } from 'components/IllustList'

type OwnProps = {
  illusts: Illust[],
  type: DrawerType,
}

const mapDispatchToProps = (dispatch: Dispatch, { type }) => ({
  onIntersect() {
    dispatch(nextDrawerPage(type))
  },
})

const connector: Connector<OwnProps, Props> = connect(
  undefined,
  mapDispatchToProps
)
export default connector(IllustList)
