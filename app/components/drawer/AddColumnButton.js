// @flow
import React from 'react'
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import type {User} from '../../types/user'
import {addUserIllusts} from '../../actions'
import Button from '../common/button'

type Props = {
	onClick: () => void,
};

const AddColumnButton = ({onClick}: Props) => {
	return (
		<a style={{margin: '0 10px'}} onClick={onClick}>
			<Button text="カラムに追加"/>
		</a>
	)
}

export default connect(undefined, (dispatch: Dispatch, {user}: {user: User}) => ({
	onClick() {
		dispatch(addUserIllusts(user))
	},
}))(AddColumnButton)
