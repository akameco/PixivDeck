import * as React from 'react'
import { User } from 'types/user'
import Button from 'components/common/Button'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

export interface Props {
  user: User
  onClick: () => undefined
}
interface State {
  isFollowing: boolean
  isFollowed: boolean
}

function selectLabel(
  isFollowed: boolean = false,
  isFollowing: boolean = false
) {
  if (isFollowed) {
    return <FormattedMessage {...messages.unFollow} />
  } else if (!isFollowed && isFollowing) {
    return <FormattedMessage {...messages.following} />
  }

  return <FormattedMessage {...messages.follow} />
}

class FollowButton extends React.PureComponent<Props, State> {
  state: State = {
    isFollowing: false,
    isFollowed: false,
  }

  componentWillMount() {
    const {
      user: { isFollowed },
    } = this.props
    this.setState({
      isFollowed,
    })
  }

  handleMouseEnter = () => {
    this.setState({
      isFollowing: false,
    })
  }
  handleMouseLeave = () => {
    this.setState({
      isFollowing: true,
    })
  }
  handleClickUnFollow = () => {
    this.setState({
      isFollowed: false,
    })
    this.props.onClick()
  }
  handleClickFollow = () => {
    this.setState({
      isFollowing: true,
    })
    this.props.onClick()
  }

  render() {
    const { isFollowed, isFollowing } = this.state
    const label = selectLabel(isFollowed, isFollowing)

    if (isFollowed) {
      return (
        <Button
          onClick={this.handleClickUnFollow}
          label={label}
          reverse
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      )
    }

    return <Button onClick={this.handleClickFollow} label={label} />
  }
}

export default FollowButton
