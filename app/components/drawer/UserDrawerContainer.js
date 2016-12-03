// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {
	Dispatch,
	State,
	User,
	Profile,
	Illust,
} from '../../types'
import {fetchUserDetail} from '../../actions'
import {fetchDrawerIllust, fetchDrawerManga} from '../../actions/drawer'
import {getCurrentUser, getDrawerIllusts, getDrawerMangas} from '../../reducers'
import Loading from '../common/Loading'
import UserDrawer from './UserDrawer'

type Props = {
	user: User,
	profile: Profile,
	illusts: Array<Illust>,
	mangas: Array<Illust>,
	dispatch: Dispatch
};

class UserDrawerContainer extends Component {
	props: Props;

	componentDidMount() {
		this.init()
	}

	async init() {
		const {dispatch, user: {id}} = this.props

		Promise.all([
			dispatch(fetchUserDetail(id)),
			dispatch(fetchDrawerIllust(id)),
			dispatch(fetchDrawerManga(id)),
		])
	}

	render() {
		const {user, profile, illusts, mangas} = this.props
		if (profile && user) {
			return (
				<UserDrawer
					illusts={illusts}
					mangas={mangas}
					profile={profile}
					user={user}
					/>
			)
		}
		return <Loading/>
	}
}

const mapStateToProps = (state: State) => ({
	user: state.drawer.user || getCurrentUser(state),
	illusts: getDrawerIllusts(state),
	mangas: getDrawerMangas(state),
	profile: state.drawer.profile,
})

export default connect(mapStateToProps)(UserDrawerContainer)
