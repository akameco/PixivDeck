// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State, Dispatch, ModalType} from '../../types'
import {closeModal} from '../../actions'
import ModalWrapper from './ModalWrapper'
import SelectColumnModal from './select'
import SettingModal from './setting'
import SearchModal from './search'
import LoginModal from './login'

type Props = {
	modalType: ModalType,
	dispatch: Dispatch
};

class Modal extends Component {
	props: Props;

	handleOnCloseModal = () => {
		this.props.dispatch(closeModal())
	}

	renderModal(type: ModalType) {
		if (type === 'ADD_COLUMN') {
			return <SelectColumnModal/>
		}
		if (type === 'FILTER_TAG') {
			return <SettingModal/>
		}
		if (type === 'SEARCH') {
			return <SearchModal/>
		}
		if (type === 'LOGIN') {
			return <LoginModal/>
		}
		return <SelectColumnModal/>
	}

	render() {
		return (
			<ModalWrapper onClose={this.handleOnCloseModal} title={'select'}>
				{this.renderModal(this.props.modalType)}
			</ModalWrapper>
		)
	}
}

function mapStateToProps(state: State) {
	return {
		modalType: state.manage.modalType,
	}
}

export default connect(mapStateToProps)(Modal)
