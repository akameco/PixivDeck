// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {closeDrawer} from '../../actions'

type Props = {
	isDrawer: bool,
	children: React$Component<*, *, *>,
	dispatch: Dispatch
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
		transition: 'transform .2s ease-out',
		WebkitTransition: '-webkit-transform .2s ease-out',
		willChange: 'transform',
		overflowY: 'auto',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
		backgroundColor: '#fff',
	},
}

class Drawer extends Component {
	props: Props;

	handleCloseDrawer = () => {
		this.props.dispatch(closeDrawer())
	}

	render() {
		const {isDrawer} = this.props
		const overlayStyle = {...defaultStyle.overlay}
		const drawerStyle = {...defaultStyle.drawer}
		drawerStyle.right = `-${drawerStyle.width}px`
		drawerStyle.transform = 'translateX(0)'

		if (isDrawer) {
			drawerStyle.transform = `translateX(-${drawerStyle.width}px)`
			overlayStyle.opacity = 1
			overlayStyle.visibility = 'visible'
		}

		return (
			<div style={defaultStyle.root}>
				<div style={overlayStyle} onClick={this.handleCloseDrawer}/>
				<div style={drawerStyle}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default connect()(Drawer)
