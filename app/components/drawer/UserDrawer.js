// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import unionBy from 'lodash.unionby'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import type {
	Dispatch,
	State as S,
	User,
	Profile,
	Illust,
} from '../../types'
import {fetchUserIllust, fetchUserDetail} from '../../actions'
import {getCurrentUser} from '../../reducers'
import Loading from '../common/Loading'
import Header from './DrawerHeader'
import {IllstList} from './IllustList'
import styles from './UserDrawer.css'

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
		viewType: 'illust',
	};

	componentDidMount() {
		this.init()
	}

	async init() {
		const {dispatch} = this.props
		const {id} = this.props.user
		const {user, profile} = await fetchUserDetail(id)
		this.setState({profile, user})

		const illust = await dispatch(fetchUserIllust(id, 'illust'))
		this.setState({illusts: unionBy(this.state.illusts, illust, 'id')})

		const mangas = await dispatch(fetchUserIllust(id, 'manga'))
		this.setState({mangas: unionBy(this.state.mangas, mangas, 'id')})
	}

	renderContent(user, profile) {
		const {illusts, mangas} = this.state
		return (
			<div>
				<Header user={user} profile={profile}/>
				<div>
					<Tabs>
						<TabList className={styles.TabList} activeTabClassName={styles.TabListActive}>
							<Tab className={styles.TabLink} activeTabClassName={styles.TabLinkActive}>イラスト</Tab>
							<Tab className={styles.TabLink} activeTabClassName={styles.TabLinkActive}>マンガ</Tab>
						</TabList>
						<TabPanel>
							<IllstList illusts={illusts}/>
						</TabPanel>
						<TabPanel>
							<IllstList illusts={mangas}/>
						</TabPanel>
					</Tabs>
				</div>
			</div>
		)
	}

	render() {
		const {user, profile} = this.state

		if (user && user.id && user.profileImageUrls && profile) {
			return this.renderContent(user, profile)
		}
		return <Loading/>
	}
}

const mapStateToProps = (state: S) => ({
	user: getCurrentUser(state),
})

export default connect(mapStateToProps)(UserDrawer)
