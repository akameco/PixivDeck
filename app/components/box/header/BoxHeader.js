// @flow
import React from 'react'
import Popover from 'material-ui/Popover'
import type {User} from '../../../types/user'
import type {Illust} from '../../../types/illust'
import Avater from '../../common/Avater'
import BookmarkButton from '../../BookmarkButton'
import UserPopover from '../../UserPopover'
import styles from './BoxHeader.css'
import Caption from './Caption'
import Profile from './Profile'

type Props = {
	user: User,
	illust: Illust,
	onClick: () => void,
	isIllustComment: bool,
}

const Title = ({title}: {title: string}) => <div className={styles.title}>{title}</div>

type State = {
	open: bool,
	focus: bool,
	anchorEl: ?EventTarget
}

export default class BoxHeader extends React.PureComponent {
	props: Props
	delayTimer: ?number
	state: State = {
		open: false,
		focus: false,
		anchorEl: null,
	}

	handleMouseEnter = (event: Event) => {
		event.preventDefault()
		this.delaySetPopup(true, 0.2)
		this.setState({anchorEl: event.target})
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

	setPopupVisible(open: bool) {
		this.clearDelayTimer()
		this.setState({
			open,
		})
	}

	delaySetPopup(open: bool, ms?: number) {
		if (!ms) {
			this.setPopupVisible(open)
			return false
		}
		const delay = ms * 1000
		this.delayTimer = setTimeout(() => {
			this.setPopupVisible(open)
		}, delay)
	}

	render() {
		const {
			illust,
			user,
			isIllustComment,
			onClick,
		} = this.props

		const {
			id,
			title,
			caption,
			isBookmarked,
		} = illust

		const {name, profileImageUrls} = user

		return (
			<div className={styles.base}>
				<div
					onClick={this.handleClick}
					style={{margin: 5, cursor: 'pointer'}}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					>
					<Avater src={profileImageUrls.medium} size={48}/>
					<Popover
						open={this.state.open}
						useLayerForClickAway={false}
						anchorEl={this.state.anchorEl}
						>
						<div
							onMouseEnter={this.handlePopoverEnter}
							onMouseLeave={this.handleMouseLeave}
							>
							<UserPopover user={user} onClick={this.handleClick}/>
						</div>
					</Popover>
				</div>
				<div className={styles.wrap}>
					<Title title={title}/>
					<Profile name={name} onClick={onClick}/>
					<div style={{position: 'absolute', top: 5, right: 10}}>
						<BookmarkButton
							id={id}
							isBookmarked={isBookmarked}
							/>
					</div>
					{isIllustComment && caption && <Caption caption={caption}/>}
				</div>
			</div>
		)
	}
}
