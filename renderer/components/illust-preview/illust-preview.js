// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import LazyImg from './lazy-img';
import styles from './illust-preview.css';

type Props = {
	title: string,
	from: string,
	to: string,
	width: number,
	height: number,
	show: bool,
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

	handleLoad = () => {
		this.setState({isLoad: true});
	}

	render() {
		const {width, height, from, to} = this.props;
		return (
			<div styleName="base" onClick={this.handleOnClose}>
				<LazyImg
					from={from}
					to={to}
					width={width}
					height={height}
					isLoaded={this.state.isLoad}
					onLoad={this.handleLoad}
					/>
			</div>
		);
	}
}

export default cssModules(IllustPreview, styles);
