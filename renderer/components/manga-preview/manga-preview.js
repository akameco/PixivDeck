// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './manga-preview.css';

type Props = {
	img: string,
	show: bool,
	onClose: () => void
};

type State = {
	isLoad: bool
}

@css(styles)
export default class MangaPreview extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			isLoad: false
		};
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
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
				<img
					src={this.props.img}
					onLoad={this.handleImgLoad}
					styleName={imgStyle}
					/>
			</div>
		);
	}
}
