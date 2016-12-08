// @flow
import React from 'react'
import type {User} from '../../types/user'
import type {Illust} from '../../types/illust'
import BoxHeader from './BoxHeaderContainer'
import BoxFooter from './footer/BoxFooter'
import BoxImage from './BoxImage'
import styles from './Box.css'

type Props = {
	illust: Illust,
	user: User,
	isIllustOnly: bool,
	onClick: () => void,
	onClickUser: () => void,
	onClickTag: (tag: string) => void,
	onContextMenu: (event: Event) => void,
};

const Box = ({
	illust,
	user,
	onClick,
	onClickTag,
	onClickUser,
	isIllustOnly,
	onContextMenu,
}: Props) => {
	const {
		name,
		account,
		profileImageUrls,
	} = user

	const {
		title,
		caption,
		isBookmarked,
	} = illust

	const tags = illust.tags.map(x => x.name)

	return (
		<div className={styles.box} onContextMenu={onContextMenu}>
			{!isIllustOnly &&
				<BoxHeader
					name={name}
					account={account}
					img={profileImageUrls.medium}
					title={title}
					isBookmarked={isBookmarked}
					caption={caption}
					onClick={onClickUser}
					/>
			}
			<BoxImage illust={illust} onClick={onClick}/>
			{!isIllustOnly &&
				<BoxFooter tags={tags} onClickTag={onClickTag}/>
			}
		</div>
	)
}

export default Box
