// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {Page} from '../../types';
import {CloseButton} from '../button';
import styles from './multi-preview.css';

type Props = {
	pages: Array<Page>,
	onClose: () => void
};

@css(styles)
export default class MultiPreview extends Component {
	props: Props;

	render() {
		const imgs = this.props.pages.map(page => {
			return (
				<div styleName="item" key={page.imageUrls.medium}>
					<img src={page.imageUrls.medium}/>
				</div>
			);
		});
		return (
			<div styleName="base" onClick={this.props.onClose}>
				<CloseButton
					onClick={this.props.onClose}
					style={{position: 'fixed'}}
					/>
				{imgs}
			</div>
		);
	}
}
