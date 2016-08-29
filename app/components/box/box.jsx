// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {Work, User} from '../../types/';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import BoxImage from './box-image';
import styles from './box.css';

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

	render() {
		const {work, user, onClick, onClickTag, onClickUser} = this.props;
		const {title, caption, tags} = work;
		return (
			<div styleName="box">
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
