// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './avater.css';

type Props = {
	img: string
};

@css(styles)
export default class Avater extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.img !== this.props.img;
	}

	render() {
		return (
			<div styleName="avater">
				<img src={this.props.img}/>
			</div>
		);
	}
}
