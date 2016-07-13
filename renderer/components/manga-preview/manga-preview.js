// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './manga-preview.css';

type Props = {
	title: string,
	img: string,
	show: bool,
	styles: Object,
	onClose: () => void
};

class MangaPreview extends Component {
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

	handleClose = () => {
		this.props.onClose();
	};

	handleImgLoad = () => {
		this.setState({isLoad: true});
	};

	render() {
		const imgStyle = this.state.isLoad ? 'loaded' : '';
		return (
			<div styleName="base" onClick={this.handleClose}>
				まんがだよ
				<img
					src={this.props.img}
					onLoad={this.handleImgLoad}
					styleName={imgStyle}
					/>
			</div>
		);
	}
}

export default cssModules(MangaPreview, styles);
