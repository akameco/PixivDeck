// @flow
import {shell, remote, ipcRenderer} from 'electron'
import React, {Component} from 'react'
import type {Connector} from 'react-redux'
import {download} from 'electron-dl'
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../types/'
import type {Illust} from '../../types/illust'
import type {User} from '../../types/user'
import {getUser} from '../../reducers'
import {
	openImageView,
	openMangaPreview,
	currentIllust,
	openUserDrawer,
	addBookmark,
	addSearchIllustColumn,
} from '../../actions'
import Box from './Box'

const {Menu, MenuItem} = remote

type Props = {
	illust: Illust,
	user: User,
	isIllustOnly: bool,
	openUserDrawer: () => void,
	openPreview: () => void,
	addSearchIllustColumn: (tag: string) => void,
	addBookmark: (isPublic: bool) => void,
};

class BoxContainer extends Component {
	props: Props;

	handleTagClick = (tag: string) => {
		this.props.addSearchIllustColumn(tag)
	}

	handleClickUser = () => {
		this.props.openUserDrawer()
	}

	handleClick = () => {
		this.props.openPreview()
	}

	handleContextMenu = (e: Event) => {
		e.preventDefault()

		const {illust, user, addBookmark} = this.props
		const {id, title, imageUrls, metaSinglePage} = illust
		const img = imageUrls.large
		const name = user.name
		const showUser = this.handleClickUser

		const menu = new Menu()

		menu.append(new MenuItem({
			label: 'オリジナルサイズの画像を保存',
			click(item, win) {
				download(win, img)
			},
		}))

		menu.append(new MenuItem({type: 'separator'}))

		menu.append(new MenuItem({
			label: 'このユーザの情報を見る',
			click() {
				showUser()
			},
		}))

		menu.append(new MenuItem({type: 'separator'}))

		menu.append(new MenuItem({
			label: 'ブックマーク',
			click() {
				addBookmark(true)
			},
		}))

		menu.append(new MenuItem({
			label: '非公開ブックマーク',
			click() {
				addBookmark(false)
			},
		}))

		menu.append(new MenuItem({type: 'separator'}))

		menu.append(new MenuItem({
			label: 'Twitterで共有',
			click() {
				const encodedTitle = encodeURIComponent(title)
				const encodedName = encodeURIComponent(name)
				const url = `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fmode%3Dmedium%26illust_id%3D${id}&ref_src=twsrc%5Etfw&text=${encodedTitle}%20%7C%20${encodedName}%20%23pixiv%20%23PixivDeck&tw_p=tweetbutton&url=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fillust_id%3D${id}%26mode%3Dmedium`
				ipcRenderer.send('tweet', url)
			},
		}))

		menu.append(new MenuItem({
			label: 'pixivで開く',
			click() {
				shell.openExternal(`http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`)
			},
		}))

		menu.append(new MenuItem({type: 'separator'}))

		menu.append(new MenuItem({
			label: '壁紙に設定',
			click() {
				const img = metaSinglePage.originalImageUrl
				if (img) {
					ipcRenderer.send('wallpaper', img)
				} else {
					ipcRenderer.send('wallpaper', imageUrls.large)
				}
			},
		}))

		menu.popup(remote.getCurrentWindow())
	}

	render() {
		const {
			user,
			illust,
			isIllustOnly,
		} = this.props

		return (
			<Box
				user={user}
				illust={illust}
				isIllustOnly={isIllustOnly}
				onClick={this.handleClick}
				onClickUser={this.handleClickUser}
				onClickTag={this.handleTagClick}
				onContextMenu={this.handleContextMenu}
				/>
		)
	}
}

type OwnProps = {
	illust: Illust
};

const mapStateToProps = (state: State, {illust}) => ({
	user: getUser(state, illust.user),
	isIllustOnly: state.config.isIllustOnly,
})

const mapDispatchToProps = (dispatch: Dispatch, {illust}) => {
	const illustId = illust.id
	const userId = illust.user
	return {
		openPreview() {
			dispatch(currentIllust(illustId))
			if (illust.pageCount > 1) {
				dispatch(openMangaPreview())
			} else {
				dispatch(openImageView())
			}
		},
		addBookmark(isPublic: bool) {
			dispatch(addBookmark(illustId, isPublic))
		},
		openUserDrawer() {
			dispatch(openUserDrawer(userId))
		},
		addSearchIllustColumn(tag: string) {
			dispatch(addSearchIllustColumn(tag))
		},
	}
}

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps)
export default connector(BoxContainer)
