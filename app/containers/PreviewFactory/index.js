// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectOpen } from '../MangaPreview/selectors'
import { makeSelectIsImage } from '../IllustPreview/selectors'
import Preview, { type Props } from './Preview'

const mapStateToProps = createStructuredSelector({
  isOpenImage: makeSelectIsImage(),
  isOpenManga: makeSelectOpen(),
})

const connecter: Connector<{}, Props> = connect(mapStateToProps)

export default connecter(Preview)
