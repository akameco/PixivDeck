// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {WorkType} from '../../actions/type';
import {MangaIcon} from '../icon/';
import styles from './box-image.css';

type Props = {
	work: WorkType,
	onClick: () => void
};

class BoxImage extends Component {
	props: Props;

	render() {
		const {imageUrls, pageCount} = this.props.work;
		return (
			<div styleName="base">
				{pageCount > 1 &&
					<MangaIcon/>
				}
				<img
					src={imageUrls.medium}
					onClick={this.props.onClick}
					/>
			</div>
		);
	}
}

export default cssModules(BoxImage, styles);
