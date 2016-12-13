// @flow
import React, {Component} from 'react'

type Props = {
	children?: React$Component<*, *, *>,
	label?: string,
	style?: Object,
	color?: string,
	hoverdColor?: string,
	reverse?: bool,
	onClick?: Function,
	onMouseEnter: (event: Event) => void,
	onMouseLeave: (event: Event) => void,
};

type State = {
	hoverd: bool,
};

export default class Button extends Component {
	props: Props
	static defaultProps = {
		onMouseEnter: () => {},
		onMouseLeave: () => {},
	}

	state: State = {
		hoverd: false,
	}

	handleMouseEnter = (event: Event) => {
		this.setState({hoverd: true})
		this.props.onMouseEnter(event)
	}

	handleMouseLeave = (event: Event) => {
		this.setState({hoverd: false})
		this.props.onMouseLeave(event)
	}

	render() {
		const {
			label,
			color,
			hoverdColor,
			children,
			reverse,
			onClick,
		} = this.props

		const {
			hoverd,
		} = this.state

		let buttonColor = color || '#fff'
		let buttonHoverdColor = hoverdColor || '#7898cf'
		const borderColor = buttonHoverdColor

		if (reverse) {
			[buttonColor, buttonHoverdColor] = [buttonHoverdColor, buttonColor]
		}

		const styles = {
			root: {
				margin: 0,
				padding: '12px 17px 10px',
				color: hoverd ? buttonColor : buttonHoverdColor,
				background: hoverd ? buttonHoverdColor : buttonColor,
				border: `1px solid ${borderColor}`,
				boxShadow: 'none',
				cursor: 'pointer',
				textDecoration: 'none',
				borderRadius: 20,
				fontSize: 13,
			},
		}

		const mergedStyle = {...styles.root, ...this.props.style}

		return (
			<button
				style={mergedStyle}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				onClick={onClick}
				>
				{label || children}
			</button>
		)
	}
}
