// @flow
import * as React from 'react'
import styled from 'styled-components'
import Popover from 'material-ui/Popover'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import Avater from 'components/Avater'
import BookmarkButton from 'containers/BookmarkButton'
import UserPopover from 'containers/UserPopoverContainer'
import Profile from 'components/Profile'
import Title from './Title'
import Caption from './Caption'
import Wrapper from './BoxHeaderWrapper'

const AvaterWrapper = styled.div`
  margin: 5px;
  cursor: pointer;
`

const ProfileWrapper = styled.div`
  position: relative;
  width: calc(100% - 56px);
`

type Props = {
  user: User,
  illust: Illust,
  onClick: () => void,
  isShowCaption: boolean,
}

type State = {
  open: boolean,
  focus: boolean,
  anchorEl: ?EventTarget,
}

export default class BoxHeader extends React.PureComponent<Props, State> {
  delayTimer: ?number
  state: State = {
    open: false,
    focus: false,
    anchorEl: null,
  }

  handleMouseEnter = (event: Event) => {
    event.preventDefault()
    this.delaySetPopup(true, 0.2)
    this.setState({ anchorEl: event.target })
  }

  handlePopoverEnter = () => {
    this.setPopupVisible(true)
  }

  handleMouseLeave = (event: MouseEvent) => {
    event.preventDefault()
    this.setPopupVisible(false)
  }

  handleClick = () => {
    this.setPopupVisible(false)
    this.props.onClick()
  }

  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer)
      this.delayTimer = null
    }
  }

  setPopupVisible(open: boolean) {
    this.clearDelayTimer()
    this.setState({
      open,
    })
  }

  delaySetPopup(open: boolean, ms?: number): void {
    if (!ms) {
      this.setPopupVisible(open)
      return
    }
    const delay = ms * 1000
    this.delayTimer = setTimeout(() => {
      this.setPopupVisible(open)
    }, delay)
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // state
    if (
      nextState.focus !== this.state.focus ||
      nextState.open !== this.state.open ||
      nextState.anchorEl !== this.state.anchorEl
    ) {
      return true
    }

    if (nextProps.isShowCaption !== this.props.isShowCaption) {
      return true
    }

    const { illust, user } = this.props
    const nextIllust = nextProps.illust
    const nextUser = nextProps.user

    const { isBookmarked } = illust
    if (nextIllust.isBookmarked !== isBookmarked) {
      return true
    }
    if (nextUser.isFollowed !== user.isFollowed) {
      return true
    }

    return false
  }

  render() {
    const { illust, user, isShowCaption, onClick } = this.props

    const { id, title, caption, isBookmarked } = illust

    if (!user) {
      return null
    }

    const { name, profileImageUrls } = user

    return (
      <Wrapper>
        <AvaterWrapper
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Avater src={profileImageUrls.medium} size={48} />
          <Popover
            open={this.state.open}
            useLayerForClickAway={false}
            anchorEl={this.state.anchorEl}
          >
            <div
              onMouseEnter={this.handlePopoverEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <UserPopover user={user} onClick={this.handleClick} />
            </div>
          </Popover>
        </AvaterWrapper>
        <ProfileWrapper>
          <Title title={title} />
          <Profile name={name} onClick={onClick} />
          <div style={{ position: 'absolute', top: 5, right: 10 }}>
            <BookmarkButton id={id} isBookmarked={isBookmarked} />
          </div>
          {isShowCaption && caption && <Caption caption={caption} />}
        </ProfileWrapper>
      </Wrapper>
    )
  }
}
