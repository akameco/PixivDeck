// @flow
import {remote, ipcRenderer} from 'electron';
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {Work, User} from '../../types/';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import BoxImage from './box-image';
import styles from './box.css';

const {Menu, MenuItem} = remote;

type Props = {
	work: Work,
	user: User,
	onClick: () => void,
	onClickUser: () => void,
	onClickTag: (tag: string) => void
};

@css(styles)
export default class Box extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.work.id !== this.props.work.id;
	}

	handleContextMenu = (e: Event) => {
		e.preventDefault();

		const {id, title} = this.props.work;
		const name = this.props.user.name;

		const menu = new Menu();

		menu.append(new MenuItem({
			label: 'Twitterで共有',
			click() {
				const encodedTitle = encodeURIComponent(title);
				const encodedName = encodeURIComponent(name);
				const url = `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fmode%3Dmedium%26illust_id%3D${id}&ref_src=twsrc%5Etfw&text=${encodedTitle}%20%7C%20${encodedName}%20%23pixiv&tw_p=tweetbutton&url=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fillust_id%3D${id}%26mode%3Dmedium`;
				ipcRenderer.send('tweet', url);
			}
		}));

		menu.popup(remote.getCurrentWindow());
	}

	render() {
		const {work, user, onClick, onClickTag, onClickUser} = this.props;
		const {title, caption, tags} = work;
		return (
			<div styleName="box" onContextMenu={this.handleContextMenu}>
				<BoxHeader
					name={user.name}
					account={user.account}
					img={user.profileImageUrls.px50x50}
					title={title}
					caption={caption}
					onClick={onClickUser}
					/>
				<BoxImage work={work} onClick={onClick}/>
				<BoxFooter tags={tags} onClickTag={onClickTag}/>
			</div>
		);
	}
}
