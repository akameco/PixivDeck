// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State} from '../../types';
import {openDrawer} from '../../actions';
import Drawer from './index';

type Props = {
	dispatch: Dispatch
};

class UserDrawer extends Component {
	props: Props;

	handleClickUser = () => {
		// const {user} = this.props;
		this.props.dispatch(openDrawer());
		// this.props.dispatch(addColumn({type: 'userIllusts', id: user.id}, `${user.name}(${user.account})`));
	}

	render() {
		return (
			<Drawer>
				<div>
					hello
				</div>
			</Drawer>
		);
	}
}

function mapStateToProps(state: State) {
	// const user = state.entities.users.filter(v => )
	return {
		// user: state.entities.users
	};
}

export default connect(mapStateToProps)(UserDrawer);
