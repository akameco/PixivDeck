// @flow
import React from 'react'
import styled from 'styled-components'
import Subheader from 'material-ui/Subheader'
import Card from './Card'

const Discription = styled.div`
	color: rgba(0, 0, 0, 0.5);
	font-size: 14px;
	margin: 4px 0 0;
	line-height: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: wrap;
	padding: 5px 20px;
`

const A = styled.a`
	color: rgba(37, 143, 233, 0.8);
	text-decoration: underline;
	display: inline-flex;
	align-items: flex-end;
	margin: 2px;
`

const LimitSetting = () => (
	<Card>
		<Subheader>閲覧制限</Subheader>
		<Discription>
			R-18タグをフィルターするのがもっとも簡単です。
			どうしても閲覧制限を設定はpixivのサイト上にて変更する必要があります。
			<br/>
			<A href="http://www.pixiv.net/setting_user.php" target="_brank">
				pixiv - R-18設定
			</A>
		</Discription>
	</Card>
)

export default LimitSetting
