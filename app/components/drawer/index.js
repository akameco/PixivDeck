// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Dispatch} from '../../types';
import {closeDrawer} from '../../actions';

type Props = {
	isOpen: bool,
	children: React$Component<*, *, *>,
	dispatch: Dispatch
};

const defaultStyle = {
	overlay: {
		zIndex: 800,
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		visibility: 'hidden',
		transition: 'opacity .3s ease-out',
		WebkitTransition: '-webkit-transform .3s ease-out',
		backgroundColor: 'rgba(41, 47, 51, 0.9)'
	},
	drawer: {
		zIndex: 900,
		width: 700,
		position: 'absolute',
		top: 0,
		bottom: 0,
		transition: 'transform .3s ease-out',
		WebkitTransition: '-webkit-transform .3s ease-out',
		willChange: 'transform',
		overflowY: 'auto',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
		backgroundColor: '#fff'
	}
};

class Drawer extends Component {
	props: Props;

	handleCloseDrawer = () => {
		this.props.dispatch(closeDrawer());
	}

	render() {
		const {isOpen} = this.props;
		const overlayStyle = {...defaultStyle.overlay};
		const drawerStyle = {...defaultStyle.drawer};
		drawerStyle.right = `-${drawerStyle.width}`;
		drawerStyle.transform = 'translateX(0)';

		if (isOpen) {
			drawerStyle.transform = `translateX(-${drawerStyle.width}px)`;
			overlayStyle.opacity = 1;
			overlayStyle.visibility = 'visible';
		}

		return (
			<div>
				<div style={overlayStyle} onClick={this.handleCloseDrawer}/>
				<div style={drawerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const isDrawer = state.manage.isDrawer;
	return {isDrawer};
}

export default connect(mapStateToProps)(Drawer);
