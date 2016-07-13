// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './illust-preview.css';

type Props = {
	title: string,
	from: string,
	to: string,
	width: number,
	height: number,
	show: bool,
	styles: Object,
	onClose: () => void
};

class IllustPreview extends Component {
	props: Props;

	state: {
		isLoad: bool
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.isLoad !== nextState.isLoad;
	}

	handleOnClose = () => {
		this.props.onClose();
	};

	handleImgLoad = () => {
		this.setState({isLoad: true});
	};

	handleLoad = () => {
		const img = new Image();
		img.onload = () => {
			this.setState({isLoad: true});
		};
		img.src = this.props.to;
	}

	render() {
		const imgStyle = this.state.isLoad ? 'loaded' : 'loading';
		const {width, height} = this.props;

		let fromStyle = {};
		if (height > window.innerHeight) {
			fromStyle = {width: 'auto', height: window.innerHeight};
		} else if (width > window.innerWidth) {
			fromStyle = {width: window.innerWidth, height: 'auto'};
		} else {
			fromStyle = {width, height};
		}

		return (
			<div styleName="base" onClick={this.handleOnClose}>
				{this.state.isLoad ?
					<img
						src={this.props.to}
						styleName={imgStyle}
						/> :
					<img
						src={this.props.from}
						styleName="from"
						style={fromStyle}
						onLoad={this.handleLoad}
						/>
				}
			</div>
		);
	}
}

export default cssModules(IllustPreview, styles);
