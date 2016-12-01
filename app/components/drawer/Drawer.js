// @flow
import React from 'react'

type Props = {
	isDrawer: bool,
	closeDrawer: () => void,
	children: React$Component<*, *, *>,
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
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		opacity: 0,
		visibility: 'hidden',
		transition: 'opacity .2s ease-out',
		WebkitTransition: '-webkit-transform .2s ease-out',
		backgroundColor: 'rgba(41, 47, 51, 0.9)',
	},
	drawer: {
		zIndex: 900,
		width: 600,
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

const Drawer = ({isDrawer, closeDrawer, children}: Props) => {
	const overlayStyle = {...defaultStyle.overlay}
	const drawerStyle = {...defaultStyle.drawer}
	drawerStyle.right = `-${drawerStyle.width}px`

	if (isDrawer) {
		drawerStyle.transform = `translateX(-${drawerStyle.width}px)`
		overlayStyle.opacity = 1
		overlayStyle.visibility = 'visible'
	}

	return (
		<div style={defaultStyle.root}>
			<div style={overlayStyle} onClick={closeDrawer}/>
			<div style={drawerStyle}>
				{children}
			</div>
		</div>
	)
}

export default Drawer
