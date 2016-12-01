// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import isEqual from 'lodash.isequal'
import type {Dispatch, State as S, Illust, ColumnType} from '../../types'
import {fetchColumn, closeColumn} from '../../actions'
import {getIllusts} from '../../reducers'
import Column from './column'

type Props = {
	column: ColumnType,
	dispatch: Dispatch,
	illusts: Array<Illust>
};

class SmartColumn extends Component {
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
		await this.fetch()
		this.timer = setInterval(async () => {
			await this.fetch()
		}, this.props.column.timer || 1000 * 60 * 5)
	}

	async fetch() {
		const column = this.props.column
		if (column.query.opts) {
			delete column.query.opts.max_bookmark_id
			column.query.opts.offset = 0
		}
		await this.props.dispatch(fetchColumn(column), false)
	}

	handleClose = () => {
		this.props.dispatch(closeColumn(this.props.column.id))
	}

	handleReload = () => {
		this.fetch()
	}

	handleOnNextPage = () => {
		this.props.dispatch(fetchColumn(this.props.column))
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

export default connect(mapStateToProps)(SmartColumn)
