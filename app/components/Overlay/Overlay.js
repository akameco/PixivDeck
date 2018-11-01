// @flow
import * as React from 'react'
import AutoLockScroll from 'components/AutoLockScroll'
import StyledOverlay from './StyledOverlay'

type Props = {
  show: boolean,
  autoLockScrolling: boolean,
  style: Object,
}

class Overlay extends React.Component<Props, void> {
  props: Props
  static defaultProps = { autoLockScrolling: true }

  render() {
    const { autoLockScrolling, show, ...other } = this.props

    return (
      <StyledOverlay show={show} {...other}>
        {autoLockScrolling && <AutoLockScroll lock={show} />}
      </StyledOverlay>
    )
  }
}

export default Overlay
