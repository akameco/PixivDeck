// @flow
import React, {Component} from 'react'
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

export default class IllustPreview extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.isLoaded !== nextProps.isLoaded
	}

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
