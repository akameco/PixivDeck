// @flow
import React, {Component} from 'react'

type Props = {
	img: string,
	imgStyle?: Object
};

const defaultStyle = {
	img: {
		width: 50,
		height: 50,
		borderRadius: 4,
	},
}

export default class Avater extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.img !== this.props.img
	}

	render() {
		const imgStyle = {...defaultStyle.img, ...this.props.imgStyle}
		return (
			<img src={this.props.img} style={imgStyle}/>
		)
	}
}
