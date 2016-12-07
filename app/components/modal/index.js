// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State, Dispatch} from '../../types'
import type {ModalType} from '../../types/manage'
import {closeModal} from '../../actions'
import ModalWrapper from './ModalWrapper'
import SelectColumnModal from './select'
import SettingModal from './setting'
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

const mapStateToProps = ({manage: modalType}: State) => ({
	modalType,
})

export default connect(mapStateToProps)(Modal)
