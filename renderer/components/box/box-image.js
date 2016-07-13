// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {WorkType} from '../../actions/type';
import {MangaIcon} from '../icon/';
import styles from './box-image.css';

type Props = {
	work: WorkType,
	onClick: (id: number) => void
};

class BoxImage extends Component {
	props: Props;

	handleClick = () => {
		this.props.onClick(this.props.work.id);
	}

	render() {
		const {work} = this.props;
		const {imageUrls, pageCount} = work;
		return (
			<div styleName="base">
				{pageCount > 1 &&
					<MangaIcon/>
				}
				<img
					src={imageUrls.medium}
					onClick={this.handleClick}
					/>
			</div>
		);
	}
}

export default cssModules(BoxImage, styles);
