import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import LoginModal from '../LoginModal'
import AddColumnModal from '../AddColumnModal'
import SettingModal from '../SettingModal'
import { ModalType } from './reducer'
import { closeModal } from './actions'
import ModalWrapper from './ModalWrapper'
import { makeSelectType, makeSelectOpen } from './selector'

interface Props {
  type: ModalType
  open: boolean
  closeModal: () => undefined
}

function Modal({ type, open, closeModal }: Props) {
  const renderModal = (type: ModalType) => {
    if (type === 'AddColumn') {
      return <AddColumnModal />
    } else if (type === 'Setting') {
      return <SettingModal />
    } else if (type === 'Login') {
      return <LoginModal />
    }

    return <AddColumnModal />
  }

  return (
    <ModalWrapper onClose={closeModal} open={open}>
      {renderModal(type)}
    </ModalWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  open: makeSelectOpen(),
  type: makeSelectType(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeModal() {
    dispatch(closeModal())
  },
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Modal)
