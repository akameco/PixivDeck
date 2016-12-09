// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import isEqual from 'lodash.isequal'
import type {Dispatch, State as S} from '../../types'
import type {Illust} from '../../types/illust'
import type {ColumnType} from '../../types/column'
import {fetchColumn, closeColumn, nextColumnPage} from '../../actions'
import {getIllusts} from '../../reducers'
import Column from './Column'

type Props = {
	column: ColumnType,
	illusts: Array<Illust>,
	onNextPage: () => void,
	onClose: () => void,
	dispatch: Dispatch,
};

class ColumnContainer extends Component {
	props: Props;
	timer: number;

	componentDidMount() {
		this.init()
	}

	shouldComponentUpdate(nextProps, nextState) {
		const propsDiff = isEqual(nextProps, this.props)
		const stateDiff = isEqual(nextState, this.state)
		return !(propsDiff && stateDiff)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	async init(): Promise<void> {
		const {column, dispatch} = this.props
		await dispatch(fetchColumn(column, true))
		this.timer = setInterval(async () => {
			await this.fetch()
		}, column.timer)
	}

	async fetch() {
		const {column, dispatch} = this.props
		await dispatch(fetchColumn(column, false))
	}

	handleReload = () => {
		this.fetch()
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

const mapStateToProps = (state: S, {column: {id}}: Props) => ({
	illusts: getIllusts(state, id),
})

const matDispatchToProps = (dispatch: Dispatch, {column}: Props) => {
	const {id} = column

	return {
		dispatch,
		onNextPage() {
			dispatch(nextColumnPage(id))
		},
		onClose() {
			dispatch(closeColumn(id))
		},
	}
}

export default connect(mapStateToProps, matDispatchToProps)(ColumnContainer)
