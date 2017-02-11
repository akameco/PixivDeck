// @flow
import React from 'react'
import styled from 'styled-components'
import Avater from '../common/Avater'
import type {User} from '../../types/user'
import type {Illust} from '../../types/illust'
import FollowButton from '../FollowButton'
import Profile from '../box/header/Profile'

export type Props = {
	onClick: () => void;
	illusts: Array<Illust>;
	user: User;
}

const UserPopover = ({user, onClick, illusts}: Props) => {
	const Images = illusts.map(v =>
		<img
			key={v.id}
			src={v.imageUrls.squareMedium}
			width={150}
			height={150}
			/>
		)
	return (
		<Wrap>
			<Top>
				<TopRight>
					<Avater
						src={user.profileImageUrls.medium}
						onClick={onClick}
						size={48}
						/>
					<Profile
						name={user.name}
						onClick={onClick}
						style={{color: '#222'}}
						/>
				</TopRight>
				<FollowButton user={user}/>
			</Top>
			<ImageWrap>
				{Images}
			</ImageWrap>
		</Wrap>
	)
}

const Wrap = styled.div`
	min-width: 300px;
	min-height: 200px;
`

const Top = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const TopRight = styled.div`
	display: flex;
	align-items: flex-end;
`

const ImageWrap = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
`

export default UserPopover
