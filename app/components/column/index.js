// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import isEqual from 'lodash.isequal'
import type {Dispatch, State as S, Illust, ColumnType} from '../../types'
import {fetchColumn, closeColumn, nextPage} from '../../actions'
import {getIllusts} from '../../reducers'
import Column from './Column'

type Props = {
	column: ColumnType,
	illusts: Array<Illust>,
	dispatch: Dispatch
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

	handleClose = () => {
		const {dispatch, column} = this.props
		dispatch(closeColumn(column.id))
	}

	handleReload = () => {
		this.fetch()
	}

	handleOnNextPage = () => {
		const {column, dispatch} = this.props
		dispatch(nextPage(column.id))
	}

	render() {
		const {column, illusts} = this.props
		return (
			<Column
				illusts={illusts}
				column={column}
				onReload={this.handleReload}
				onClose={this.handleClose}
				onNextPage={this.handleOnNextPage}
				/>
		)
	}
}

const mapStateToProps = (state: S, {column}: Props) => ({
	illusts: getIllusts(state, column.id),
})

export default connect(mapStateToProps)(ColumnContainer)
