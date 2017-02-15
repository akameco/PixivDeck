// @flow
import React from 'react'
import type {User} from 'types/user'
import Button from 'components/common/Button'

export type Props = {
	user: User,
	onClick: () => void,
}

const unFollowText = 'フォロー解除'
const followText = 'フォローする'
const followingText = 'フォロー中'

type State = {
	label: string,
	isFollowed: bool,
}

class FollowButton extends React.PureComponent {
	props: Props
	state: State = {
		label: followText,
		isFollowed: false,
	}

	componentWillMount() {
		const {user: {isFollowed}} = this.props
		this.setState({
			isFollowed,
			label: isFollowed ? followingText : followText,
		})
	}

	handleMouseEnter = () => {
		this.setState({label: unFollowText})
	}

	handleMouseLeave = () => {
		this.setState({label: followingText})
	}

	handleClickUnFollow = () => {
		this.setState({isFollowed: false})
		this.props.onClick()
	}

	handleClickFollow = () => {
		this.setState({
			isFollowed: true,
			label: followingText,
		})
		this.props.onClick()
	}

	render() {
		const {isFollowed, label} = this.state

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
		return <Button onClick={this.handleClickFollow} label="フォローする"/>
	}
}

export default FollowButton
