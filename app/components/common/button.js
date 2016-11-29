// @flow
import React, {Component} from 'react';

type Props = {
	children?: React$Component<*, *, *>,
	text?: string,
	style?: Object
};

const defaultStyle = {
	margin: 0,
	height: 45,
	background: '#fff',
	border: 'none',
	boxShadow: 'none',
	cursor: 'pointer',
	textDecoration: 'none',
	padding: '4px 7px 5px 7px',
	fontSize: 13,
};

export default class Button extends Component {
	props: Props;

	render() {
		const {text, children} = this.props;
		const style = {...defaultStyle, ...this.props.style};
		return (
			<button style={style}>
				{text || children}
			</button>
		);
	}
}
