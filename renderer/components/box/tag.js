import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './tag.css';

type Props = {
	onClick: (tag: string) => void,
	name: string
};

@CSSModules(styles)
export default class Tag extends Component {
	props: Props;

	shouldComponentUpdate() {
		return false;
	}

	handleClick = () => {
		this.props.onClick(this.props.name);
	}

	render() {
		return (
			<a onClick={this.handleClick} styleName="base">
				#{this.props.name}
			</a>
		);
	}
}
