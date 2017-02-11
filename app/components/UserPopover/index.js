// @flow
import React from 'react'
import {connect} from 'react-redux'
import type {State, Dispatch} from '../../types'
import type {User} from '../../types/user'
import type {Illust} from '../../types/illust'
import UserPopover from './UserPopover'

type Props = {
	user: User,
	onClick: () => void,
	illusts: Array<Illust>,
	dispatch: Dispatch,
}

class UserPopoverContainer extends React.PureComponent {
	props: Props

	componentWillMount() {
		const {user: {id}, dispatch} = this.props
		dispatch({type: 'OPEN_USER_POPOVER', id})
	}

	render() {
		const {user, illusts, onClick} = this.props
		return (
			<UserPopover
				user={user}
				illusts={illusts}
				onClick={onClick}
				/>
		)
	}
}

const mapStateToProps = (state: State) => ({
	illusts: state.popover.illusts,
})

const connector = connect(mapStateToProps)
export default connector(UserPopoverContainer)
