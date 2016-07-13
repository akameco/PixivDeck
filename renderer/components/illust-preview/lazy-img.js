// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './lazy-img.css';

function createStyle(width: number, height: number): {
	width: number | 'auto',
	height: number | 'auto'
} {
	const {innerWidth, innerHeight} = window;
	if (height > innerHeight && width > innerWidth) {
		return (width * innerHeight < height * innerWidth) ?
			{width: 'auto', height: innerHeight} :
			{width: innerWidth, height: 'auto'};
	}
	if (height > innerHeight) {
		return {width: 'auto', height: innerHeight};
	}
	if (width > innerWidth) {
		return {width: innerWidth, height: 'auto'};
	}

	return {width, height};
}

type Props = {
	from: string,
	to: string,
	width: number,
	height: number,
	isLoaded: bool,
	onLoad: () => void
};

class LazyImg extends Component {
	props: Props;

	handleLoad = () => {
		const img = new Image();
		img.onload = () => {
			this.props.onLoad();
		};
		img.src = this.props.to;
	}

	render() {
		const {width, height, isLoaded} = this.props;
		const style = isLoaded ? 'loaded' : 'loading';
		const fromStyle = createStyle(width, height);

		if (this.props.isLoaded) {
			return <img src={this.props.to} styleName={style}/>;
		}

		return (
			<img
				src={this.props.from}
				styleName="from"
				style={fromStyle}
				onLoad={this.handleLoad}
				/>
		);
	}
}

export default cssModules(LazyImg, styles);
