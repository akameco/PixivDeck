// @flow
import React from 'react'
import styled from 'styled-components'
import type { User, Profile } from 'types/user'
import Avater from 'components/Avater'
import TextAutoLink from 'components/TextAutoLink'
import Navigation from './Navigation'

const Header = ({ user, profile }: { user: User, profile: Profile }) =>
  <Wrap>
    <Navigation user={user} profile={profile} />
    <ImageWrap>
      <Avater src={user.profileImageUrls.medium} size={140} />
    </ImageWrap>
    <Info><h1>{user.name}</h1></Info>
    <Caption>
      {user.comment && <TextAutoLink text={user.comment} />}
    </Caption>
  </Wrap>

const Wrap = styled.div`
	background-color: #eee;
	padding-bottom: 30px;
`

const ImageWrap = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 20px auto;
	text-align: center;
`

const Info = styled.div`
	text-align: center;
`

const Caption = styled.div`
	background-color: #fff;
	border-radius: 2px;
	margin: 10px 20px;
	padding: 10px 20px;
	line-height: 21px;
	font-size: 14px;
`

export default Header
