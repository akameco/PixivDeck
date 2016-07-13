// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {WorkType, UserType} from '../../actions/type';
import {MangaIcon} from '../icon/';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import styles from './box.css';

type Props = {
	work: WorkType,
	user: UserType,
	onClickTag: (tag: string) => void,
	onClick: (id: number) => void
};

class ImageBox extends Component {
	props: Props;

	handleClick = () => {
		this.props.onClick(this.props.work.id);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.work.id !== nextProps.work.id;
	}

	render() {
		const {work, user} = this.props;
		const {title, imageUrls, caption, tags, pageCount} = work;
		return (
			<div styleName="base">
				<BoxHeader
					name={user.name}
					account={user.account}
					img={user.profileImageUrls.px50x50}
					/>
				{title}
				{caption}
				<div styleName="image-wrap">
					{pageCount > 1 &&
						<MangaIcon/>
					}
					<img
						src={imageUrls.medium}
						onClick={this.handleClick}
						/>
				</div>
				<br/>
				<BoxFooter tags={tags} onClickTag={this.props.onClickTag}/>
			</div>
		);
	}
}

export default cssModules(ImageBox, styles);
