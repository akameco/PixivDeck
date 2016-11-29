// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './Loading.css';

const defaultStyle = {
	wrap: {
		background: '#eee',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
};

type Props = {
	wrapStyle?: Object
};

@css(styles)
export default class Loading extends Component {
	props: Props;

	render() {
		const wrapStyle = Object.assign({}, defaultStyle.wrap, this.props.wrapStyle);
		return (
			<div style={wrapStyle}>
				<div styleName="spinner">
					<div/>
					<div styleName="rect2"/>
					<div styleName="rect3"/>
					<div styleName="rect4"/>
					<div styleName="rect5"/>
				</div>
			</div>
		);
	}
}
