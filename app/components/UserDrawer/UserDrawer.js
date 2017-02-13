// @flow
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import type {User, Profile} from 'types/user'
import type {Illust} from 'types/illust'
import Header from './DrawerHeader'
import IllstList from './IllustListContainer'

type Props = {
	user: User,
	profile: Profile,
	illusts: Array<Illust>,
	mangas: Array<Illust>,
}

const tabProps = {
	tabItemContainerStyle: {
		backgroundColor: 'rgb(54, 75, 78)',
	},
	inkBarStyle: {
		backgroundColor: '#afafaf',
	},
}

const UserDrawer = ({user, profile, illusts, mangas}: Props) => {
	const {totalIllusts, totalManga} = profile
	return (
		<div>
			<Header user={user} profile={profile}/>
			<Tabs {...tabProps}>
				<Tab label={`イラスト (${totalIllusts})`}>
					<IllstList illusts={illusts} type="illust"/>
				</Tab>
				<Tab label={`マンガ (${totalManga})`}>
					<IllstList illusts={mangas} type="manga"/>
				</Tab>
			</Tabs>
		</div>
	)
}

export default UserDrawer
