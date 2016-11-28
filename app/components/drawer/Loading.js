// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './Loading.css';

@css(styles)
export default class Loading extends Component {
	render() {
		return (
			<div styleName="wrap">
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
