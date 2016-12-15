// @flow
import React from 'react'
import keycode from 'keycode'
import EventListener from 'react-event-listener'
import Overlay from '../common/Overlay'

export type Props = {
	open: bool,
	children?: React$Element<any>,
	onRequestClose: () => void,
	width?: number,
};

const defaultStyle = {
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'hidden',
	},
	overlay: {
		zIndex: 800,
	},
	drawer: {
		zIndex: 900,
		position: 'absolute',
		top: 0,
		bottom: 0,
		transform: 'translateX(0)',
		transition: 'transform .2s ease-out',
		WebkitTransition: '-webkit-transform .2s ease-out',
		willChange: 'transform',
		overflowY: 'auto',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
		backgroundColor: '#fff',
	},
}

class Drawer extends React.PureComponent {
	props: Props

	handleKeyUp = (event: Event) => {
		if (keycode(event) === 'esc') {
			this.props.onRequestClose()
		}
	}

	render() {
		const {
			open,
			onRequestClose,
			children,
			width,
		} = this.props

		const overlayStyle = {...defaultStyle.overlay}
		const drawerStyle = {...defaultStyle.drawer}
		drawerStyle.width = width || 600
		drawerStyle.right = `-${drawerStyle.width}px`

		if (open) {
			drawerStyle.transform = `translateX(-${drawerStyle.width}px)`
			overlayStyle.opacity = 1
			overlayStyle.visibility = 'visible'
		}

		return (
			<div style={defaultStyle.root}>
				{open &&
					<EventListener
						target="window"
						onKeyUp={this.handleKeyUp}
						/>
				}
				<div style={drawerStyle}>
					{open && children}
				</div>
				<Overlay
					show={open}
					style={defaultStyle.overlay}
					onClick={onRequestClose}
					/>
			</div>
		)
	}
}

export default Drawer
