// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State, Dispatch, Query, Endpoint} from '../../../types'
import {addColumn} from '../../../actions'
import Modal from './select-modal'

type Props = {
	dispatch: Dispatch
};

class SmartModal extends Component {
	props: Props;

	handleAddColumn = (endpoint: Endpoint, query: Query, title: string = '') => {
		this.props.dispatch(addColumn(endpoint, query, title, 1000 * 60 * 5))
	};

	handleHistory = () => {
	}

	render() {
		return (
			<Modal
				onClickHistory={this.handleHistory}
				onSelect={this.handleAddColumn}
				/>
		)
	}
}

function mapStateToProps(state: State) {
	return {
		history: state.history,
	}
}

export default connect(mapStateToProps)(SmartModal)
