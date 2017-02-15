// @flow
import React from 'react'
import type {User} from 'types/user'
import type {Illust} from 'types/illust'
import BoxHeader from './header/BoxHeader'
import BoxFooter from './footer/BoxFooter'
import BoxImage from './BoxImage'
import BoxWrapper from './boxStyles'

type Props = {
	illust: Illust,
	user: User,
	isIllustOnly: bool,
	isIllustComment: bool,
	onClick: () => void,
	onClickUser: () => void,
	onClickTag: (tag: string) => void,
	onContextMenu: (event: Event) => void,
}

const Box = ({
	illust,
	user,
	onClick,
	onClickTag,
	onClickUser,
	isIllustOnly,
	isIllustComment,
	onContextMenu,
}: Props) => {
	const tags = illust.tags.map(x => x.name)

	return (
		<BoxWrapper onContextMenu={onContextMenu}>
			{!isIllustOnly &&
				<BoxHeader
					user={user}
					illust={illust}
					isIllustComment={isIllustComment}
					onClick={onClickUser}
					/>
			}
			<BoxImage illust={illust} onClick={onClick}/>
			{!isIllustOnly &&
				<BoxFooter tags={tags} onClickTag={onClickTag}/>
			}
		</BoxWrapper>
	)
}

export default Box
