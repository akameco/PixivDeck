// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview, { type Props } from './Preview'
import { makeSelectId, makeSelectIsImage, makeSelectIsManga } from './selectors'

const mapStateToProps = createStructuredSelector({
  id: makeSelectId(),
  isOpenImage: makeSelectIsImage(),
  isOpenManga: makeSelectIsManga(),
})

const connecter: Connector<{}, Props> = connect(mapStateToProps)

export default connecter(Preview)
