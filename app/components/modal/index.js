// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {State, Dispatch} from '../../types'
import type {ModalType} from '../../types/manage'
import {closeModal} from '../../actions'
import LoginModal from '../LoginModal'
import SettingModal from '../SettingModal'
import AddColumnModal from '../AddColumnModal'
import ModalWrapper from './ModalWrapper'

type Props = {
	modalType: ModalType,
	open: bool,
	closeModal: () => void,
}

class Modal extends Component {
	props: Props;

	renderModal(type: ModalType) {
		if (type === 'ADD_COLUMN') {
			return <AddColumnModal/>
		} else if (type === 'FILTER_TAG') {
			return <SettingModal/>
		} else if (type === 'LOGIN') {
			return <LoginModal/>
		} else if (type === 'DEFAULT') {
			return <AddColumnModal/>
		}
	}

	render() {
		const {
			modalType,
			closeModal,
			open,
		} = this.props

		return (
			<ModalWrapper onClose={closeModal} open={open}>
				{this.renderModal(modalType)}
			</ModalWrapper>
		)
	}
}

const mapStateToProps = ({manage: {modalType, isModal}}: State) => ({
	modalType,
	open: isModal,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	closeModal() {
		dispatch(closeModal())
	},
})

const connector: Connector<{}, Props> = connect(mapStateToProps, mapDispatchToProps)
export default connector(Modal)
