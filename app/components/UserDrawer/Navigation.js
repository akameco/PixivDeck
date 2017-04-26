// @flow
import React from 'react'
import styled from 'styled-components'
import type { User, Profile } from 'types/user'
import FollowButton from '../FollowButton'
import AddColumnButton from './AddColumnButton'
import TwitterButton from './TwitterButton'

type Props = {
  user: User,
  profile: Profile,
}

const Navigation = ({ user, profile }: Props) => {
  return (
    <NavigationWrap>
      <Wrap>
        {profile.twitterUrl && <TwitterButton url={profile.twitterUrl} />}
        <FollowButton user={user} />
        <AddColumnButton user={user} />
      </Wrap>
    </NavigationWrap>
  )
}

const NavigationWrap = styled.div`
	width: 100%;
	position: flex;
	left: auto;
	transform: translateZ(0);
	height: 50px;
	top: 0;
	z-index: 10;
`

const Wrap = styled.div`
	display: flex;
	text-align: left;
	justify-content: flex-end;
	padding: 10px;
`

export default Navigation
