// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {Dispatch, State as ReduxState} from '../../types'
import type {Illust} from '../../types/illust'
import type {ColumnType} from '../../types/column'
import {
	fetchColumn,
	closeColumn,
	nextColumnPage,
	checkColumnUpdate,
} from '../../actions'
import {getIllusts, getColumn} from '../../reducers'
import Column from './Column'

type Props = {
	column: ColumnType,
	illusts: Array<Illust>,
	onNextPage: () => void,
	onClose: () => void,
	fetchColumn: () => void,
	checkColumnUpdate: () => void,
};

class ColumnContainer extends Component {
	props: Props;
	timer: number;

	componentDidMount() {
		this.init()
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	init() {
		const {
			column: {timer},
			fetchColumn,
			checkColumnUpdate,
		} = this.props

		fetchColumn()

		this.timer = setInterval(() => {
			checkColumnUpdate()
		}, timer)
	}

	handleReload = () => {
		this.props.checkColumnUpdate()
	}

	render() {
		const {column, illusts, ...other} = this.props
		return (
			<Column
				illusts={illusts}
				column={column}
				onReload={this.handleReload}
				{...other}
				/>
		)
	}
}

type OwnProps = {
	id: number
};

const mapStateToProps = (state: ReduxState, {id}) => ({
	column: getColumn(state, id),
	illusts: getIllusts(state, id),
})

const mapDispatchToProps = (dispatch: Dispatch, {id}) => ({
	fetchColumn() {
		dispatch(fetchColumn(id))
	},
	checkColumnUpdate() {
		dispatch(checkColumnUpdate(id))
	},
	onNextPage() {
		dispatch(nextColumnPage(id))
	},
	onClose() {
		dispatch(closeColumn(id))
	},
})

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps)
export default connector(ColumnContainer)
