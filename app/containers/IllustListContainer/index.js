// @flow
import { connect, type Connector } from 'react-redux'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import {
  nextMangaPage,
  nextIllustPage,
} from 'containers/UserDrawerContainer/actions'
import IllustList, { type Props } from 'components/IllustList'

type DrawerType = 'manga' | 'illust'

const mapDispatchToProps = (dispatch: Dispatch, { type }) => ({
  onNext() {
    // todo
    if (type === 'manga') {
      dispatch(nextMangaPage())
    } else if (type === 'illust') {
      dispatch(nextIllustPage())
    }
  },
})

type OP = {
  id: string,
  hasMore: boolean,
  illusts: Illust[],
  type: DrawerType,
}

const connector: Connector<OP, Props> = connect(undefined, mapDispatchToProps)
export default connector(IllustList)
