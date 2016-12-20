// @flow
import React from 'react'
import LazyImg from './LazyImg'
import styles from './IllustPreview.css'

type Props = {
	from: string,
	to: string,
	width: number,
	height: number,
	isLoaded: bool,
	onLoad: () => void,
	onUnLoad: () => void,
	onClose: () => void
};

export default class IllustPreview extends React.PureComponent {
	props: Props;

	componentWillUnmount() {
		this.props.onUnLoad()
	}

	handleOnClose = () => {
		this.props.onClose()
	}

	render() {
		const {width, height, from, to} = this.props

		return (
			<div className={styles.base} onClick={this.handleOnClose}>
				<LazyImg
					from={from}
					to={to}
					width={width}
					height={height}
					isLoaded={this.props.isLoaded}
					onLoad={this.props.onLoad}
					onClose={this.props.onClose}
					/>
			</div>
		)
	}
}
