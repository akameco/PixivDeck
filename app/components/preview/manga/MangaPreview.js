// @flow
import React from 'react'
import styles from './MangaPreview.css'

type Props = {
	img: string,
	onClose: () => void
};

type State = {
	isLoad: bool
};

export default class MangaPreview extends React.PureComponent {
	props: Props;
	state: State = {isLoad: false};

	handleClose = () => {
		this.props.onClose()
	}

	handleImgLoad = () => {
		this.setState({isLoad: true})
	}

	render() {
		const imgStyle = this.state.isLoad ? 'loaded' : ''
		return (
			<div className={styles.base} onClick={this.handleClose}>
				<img
					src={this.props.img}
					onLoad={this.handleImgLoad}
					className={imgStyle}
					/>
			</div>
		)
	}
}
