// @flow
import React, {Component} from 'react'
import type {MetaPages} from '../../../types/illust'
import CloseButton from '../../common/CloseButton'
import styles from './MultiPreview.css'

type Props = {
	pages: MetaPages,
	onClose: () => void
};

export default class MultiPreview extends Component {
	props: Props;

	render() {
		const {pages, onClose} = this.props
		const imgs = pages.map(page =>
			<div className={styles.item} key={page.imageUrls.medium}>
				<img src={page.imageUrls.large}/>
			</div>
		)
		return (
			<div className={styles.base} onClick={onClose}>
				<CloseButton
					onClick={onClose}
					style={{position: 'fixed'}}
					/>
				{imgs}
			</div>
		)
	}
}
