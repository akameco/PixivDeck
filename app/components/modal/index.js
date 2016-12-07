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
	closeModal: () => void,
};

class Modal extends Component {
	props: Props;

	renderModal(type: ModalType) {
		if (type === 'ADD_COLUMN') {
			return <SelectColumnModal/>
		} else if (type === 'FILTER_TAG') {
			return <SettingModal/>
		} else if (type === 'LOGIN') {
			return <LoginModal/>
		} else if (type === 'DEFAULT') {
			return <SelectColumnModal/>
		}
	}

	render() {
		const {modalType, closeModal} = this.props
		return (
			<ModalWrapper onClose={closeModal} title={'select'}>
				{this.renderModal(modalType)}
			</ModalWrapper>
		)
	}
}

const mapStateToProps = ({manage: {modalType}}: State) => ({
	modalType,
})

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		closeModal() {
			dispatch(closeModal())
		},
	}
)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
