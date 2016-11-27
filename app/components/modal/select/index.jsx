// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Dispatch, Query} from '../../../types';
import {addColumn} from '../../../actions';
import Modal from './select-modal';

type Props = {
	dispatch: Dispatch
};

class SmartModal extends Component {
	props: Props;

	handleAddColumn = (query: Query, title: string = '') => {
		this.props.dispatch(addColumn(query, title));
	};

	handleHistory = () => {
	}

	render() {
		return (
			<Modal
				onClickHistory={this.handleHistory}
				onSelect={this.handleAddColumn}
				/>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		history: state.history
	};
}

export default connect(mapStateToProps)(SmartModal);
