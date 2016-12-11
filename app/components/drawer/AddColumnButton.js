// @flow
import React from 'react'
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {Dispatch} from '../../types'
import type {User} from '../../types/user'
import {addUserIllusts} from '../../actions'
import Button from '../common/button'

type Props = {
	onClick: () => void,
};

const AddColumnButton = ({onClick}: Props) =>
	<a style={{margin: '0 10px'}} onClick={onClick}>
		<Button text="カラムに追加"/>
	</a>

type OwnProps = {
	user: User
};

const mapDispatchToProps = (dispatch: Dispatch, {user}) => ({
	onClick() {
		dispatch(addUserIllusts(user))
	},
})

const connector: Connector<OwnProps, Props> = connect(undefined, mapDispatchToProps)
export default connector(AddColumnButton)
