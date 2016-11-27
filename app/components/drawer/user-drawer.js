// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, User} from '../../types';
import {addColumn} from '../../actions';
import Drawer from './index';

type Props = {
	user: User,
	dispatch: Dispatch
};

class UserDrawer extends Component {
	props: Props;

	handleClickUser = () => {
		const {user} = this.props;
		this.props.dispatch(addColumn({type: 'userIllusts', id: user.id}, `${user.name}(${user.account})`));
	}

	render() {
		const {user} = this.props;
		if (!user) {
			return <div>No Login</div>;
		}
		return (
			<Drawer>
				<div>
					<h1>{user.name}</h1>
					hello
				</div>
			</Drawer>
		);
	}
}

function mapStateToProps(state: State) {
	if (!state.manage.userId) {
		return {};
	}
	const user = state.entities.users[state.manage.userId];
	return {
		user
	};
}

export default connect(mapStateToProps)(UserDrawer);
