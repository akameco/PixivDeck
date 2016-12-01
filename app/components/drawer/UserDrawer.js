// @flow
import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import type {
	User,
	Profile,
	Illust,
} from '../../types'
import Loading from '../common/Loading'
import Header from './DrawerHeader'
import {IllstList} from './IllustList'
import styles from './UserDrawer.css'

type Props = {
	user: User,
	profile: Profile,
	illusts: Array<Illust>,
	mangas: Array<Illust>,
};

const UserDrawer = ({user, profile, illusts, mangas}: Props) => {
	if (!profile) {
		return <Loading/>
	}
	const {totalIllusts, totalManga} = profile
	return (
		<div>
			<Header user={user} profile={profile}/>
			<div>
				<Tabs>
					<TabList className={styles.TabList} activeTabClassName={styles.TabListActive}>
						{totalIllusts > 0 &&
							<Tab className={styles.TabLink} activeTabClassName={styles.TabLinkActive}>
								イラスト ( {totalIllusts} )
							</Tab>
						}
						{totalManga > 0 &&
							<Tab className={styles.TabLink} activeTabClassName={styles.TabLinkActive}>
								マンガ ( {totalManga} )
							</Tab>
						}
					</TabList>
					{totalIllusts > 0 &&
						<TabPanel>
							<IllstList illusts={illusts}/>
						</TabPanel>
					}
					{totalManga > 0 &&
						<TabPanel>
							<IllstList illusts={mangas}/>
						</TabPanel>
					}
				</Tabs>
			</div>
		</div>
	)
}

export default UserDrawer
