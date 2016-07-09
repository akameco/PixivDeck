// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './avater.css';

type Props = {
	img: string
};

class Avater extends Component {
	props: Props;

	render() {
		return (
			<div styleName="avater">
				<img src={this.props.img}/>
			</div>
		);
	}
}

export default cssModules(Avater, styles);
