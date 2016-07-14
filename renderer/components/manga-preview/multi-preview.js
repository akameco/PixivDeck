// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import type {Page} from '../../actions/type';
import styles from './multi-preview.css';

type Props = {
	pages: Array<Page>,
	onClose: () => void
};

@CSSModules(styles)
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
				{imgs}
			</div>
		);
	}
}
