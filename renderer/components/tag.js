import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './tag.css';

type Props = {
	onClick: (tag: string) => void,
	name: string
};

class Tag extends Component {
	props: Props;

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

export default cssModules(Tag, styles);
