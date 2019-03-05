import * as React from 'react'
import AutoLockScroll from 'components/AutoLockScroll'
import StyledOverlay from './StyledOverlay'

interface Props {
  show: boolean
  autoLockScrolling: boolean
  style: object
}

class Overlay extends React.Component<Props, undefined> {
  props: Props
  static defaultProps = {
    autoLockScrolling: true,
  }

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
