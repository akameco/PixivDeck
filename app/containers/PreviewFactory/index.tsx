import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectOpen } from '../MangaPreview/selectors'
import { makeSelectIsImage } from '../IllustPreview/selectors'
import Preview, { Props } from './Preview'

const mapStateToProps = createStructuredSelector({
  isOpenImage: makeSelectIsImage(),
  isOpenManga: makeSelectOpen(),
})
const connecter = connect(mapStateToProps)
export default connecter(Preview)
