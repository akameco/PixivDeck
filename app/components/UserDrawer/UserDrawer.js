// @flow
import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import type {User, Profile} from '../../types/user'
import type {Illust} from '../../types/illust'
import Header from './DrawerHeader'
import IllstList from './IllustListContainer'
import styles from './UserDrawer.css'

type Props = {
	user: User,
	profile: Profile,
	illusts: Array<Illust>,
	mangas: Array<Illust>,
}

const UserDrawer = ({user, profile, illusts, mangas}: Props) => {
	const {totalIllusts, totalManga} = profile
	return (
		<div>
			<Header user={user} profile={profile}/>
			<div>
				<Tabs>
					<TabList
						className={styles.tabList}
						activeTabClassName={styles.tabListActive}
						>
						{totalIllusts > 0 &&
							<Tab
								className={styles.tabLink}
								activeTabClassName={styles.tabLinkActive}
								>
								イラスト ( {totalIllusts} )
							</Tab>
						}
						{totalManga > 0 &&
							<Tab
								className={styles.tabLink}
								activeTabClassName={styles.tabLinkActive}
								>
								マンガ ( {totalManga} )
							</Tab>
						}
					</TabList>
					{totalIllusts > 0 &&
						<TabPanel>
							<IllstList illusts={illusts} type="illust"/>
						</TabPanel>
					}
					{totalManga > 0 &&
						<TabPanel>
							<IllstList illusts={mangas} type="manga"/>
						</TabPanel>
					}
				</Tabs>
			</div>
		</div>
	)
}

export default UserDrawer
