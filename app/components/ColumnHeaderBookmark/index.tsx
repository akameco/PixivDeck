import * as React from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'
import Slider from 'material-ui/Slider'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

export interface Props {
  setMinBookmarks: (value: number) => undefined
  minBookmarks: number
}
interface State {
  minBookmarks: number
}

class ColumnHeaderSetting extends React.PureComponent<Props, State> {
  state: State = {
    minBookmarks: 0,
  }

  componentWillMount() {
    this.setState({
      minBookmarks: this.props.minBookmarks,
    })
  }

  handleSlider = (event: Event, value: number) => {
    this.setState({
      minBookmarks: value,
    })

    this._sendBookmark()
  }
  _sendBookmark = debounce(() => {
    this.props.setMinBookmarks(this.state.minBookmarks)
  }, 400)

  render() {
    const { minBookmarks } = this.state
    return (
      <Wrap>
        <FormattedMessage {...messages.bookmarkFilter} /> {minBookmarks}
        <Slider
          min={0}
          max={1000}
          step={10}
          defaultValue={minBookmarks}
          value={minBookmarks}
          onChange={this.handleSlider}
        />
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #eee;
`
export default ColumnHeaderSetting
