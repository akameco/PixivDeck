// @flow
import React from 'react'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import Avater from 'components/Avater'
import FollowButton from 'components/FollowButton'
import Profile from 'components/Box/header/Profile'
import Wrap from './Wrap'
import ImageWrap from './ImageWrap'
import Top from './Top'
import TopRight from './TopRight'

export type Props = {
  onClick: () => void,
  illusts: Array<Illust>,
  user: User,
}

const UserPopover = ({ user, onClick, illusts }: Props) => {
  const Images = illusts.map(v =>
    <img key={v.id} src={v.imageUrls.squareMedium} width={150} height={150} />
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
            style={{ color: '#222' }}
          />
        </TopRight>
        <FollowButton user={user} />
      </Top>
      <ImageWrap>
        {Images}
      </ImageWrap>
    </Wrap>
  )
}

export default UserPopover
