// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import unionBy from 'lodash.unionby'
import {camelizeKeys} from 'humps'
import type {
	Dispatch,
	State as S, User,
	Profile,
	Illust, Illusts,
} from '../../types'
import {normalizeIllusts, selectIllusts} from '../../actions'
import Box from '../box'
import Pixiv from '../../repo/pixiv'
import Loading from '../common/Loading'
import Header from './DrawerHeader'

type Props = {
	user: User,
	dispatch: Dispatch
};

type State = {
	user: ?User,
	illusts: Array<Illust>,
	mangas: Array<Illust>,
	profile: ?Profile,
	viewType: 'illust' | 'manga',
};

class UserDrawer extends Component {
	props: Props;
	state: State = {
		user: null,
		profile: null,
		illusts: [],
		mangas: [],
		viewType: 'manga',
	};

	componentDidMount() {
		this.init()
	}

	async init() {
		const {id} = this.props.user
		const res = await Pixiv.userDetail(id)
		const userDetail = camelizeKeys(res)
		const profile: Profile = userDetail.profile
		const user: User = userDetail.user
		const userIllusts = await Pixiv.userIllusts(id)
		const json = normalizeIllusts(userIllusts)
		this.props.dispatch({type: 'API_REQUEST_SUCCESS', response: json})

		const illusts: Illusts = json.entities.illusts
		const unionByArray = unionBy(this.state.illusts, selectIllusts(json.result, illusts), 'id')
		this.setState({profile, user, illusts: unionByArray})

		const rowMangas = await Pixiv.userIllusts(id, {type: 'manga'})
		const normalizeMangas = normalizeIllusts(rowMangas)

		this.props.dispatch({type: 'API_REQUEST_SUCCESS', response: normalizeMangas})
		const is: Illusts = json.entities.illusts
		const mangas = unionBy(this.state.illusts, selectIllusts(json.result, is), 'id')
		this.setState({mangas})
	}

	renderIllusts() {
		const List = this.state.illusts.map(illust => {
			return (
				<Box
					key={illust.id}
					user={illust.user}
					illust={illust}
					/>
			)
		})
		return List
	}

	renderMangas() {
		const List = this.state.mangas.map(illust => {
			return (
				<Box
					key={illust.id}
					user={illust.user}
					illust={illust}
					/>
			)
		})
		return List
	}

	renderLoading() {
		return (
			<Loading/>
		)
	}

	renderContent(user, profile) {
		const {viewType, illusts, mangas} = this.state
		return (
			<div>
				<Header user={user} profile={profile}/>
				{viewType === 'illust' && illusts.length > 0 && this.renderIllusts()}
				{viewType === 'manga' && mangas.length > 0 && this.renderMangas()}
			</div>
		)
	}

	render() {
		const {user, profile} = this.state

		if (user && user.id && user.profileImageUrls && profile) {
			return this.renderContent(user, profile)
		}
		return this.renderLoading()
	}
}

function mapStateToProps(state: S) {
	if (!state.manage.userId) {
		return {}
	}
	const user = state.entities.users[state.manage.userId]
	return {
		user,
	}
}

export default connect(mapStateToProps)(UserDrawer)
