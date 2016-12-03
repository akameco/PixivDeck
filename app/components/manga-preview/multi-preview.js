// @flow
import React, {Component} from 'react'
import type {MetaPages} from '../../types'
import CloseButton from '../common/CloseButton'
import styles from './multi-preview.css'

type Props = {
	pages: MetaPages,
	onClose: () => void
};

export default class MultiPreview extends Component {
	props: Props;

	render() {
		const imgs = this.props.pages.map(page => {
			return (
				<div className={styles.item} key={page.imageUrls.medium}>
					<img src={page.imageUrls.large}/>
				</div>
			)
		})
		return (
			<div className={styles.base} onClick={this.props.onClose}>
				<CloseButton
					onClick={this.props.onClose}
					style={{position: 'fixed'}}
					/>
				{imgs}
			</div>
		)
	}
}
