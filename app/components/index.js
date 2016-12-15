// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State} from '../types'
import type {Manage} from '../types/manage'
import type {ColumnType} from '../types/column'
import {closeDrawer} from '../actions'
import IllustPreview from './preview/illust'
import MangaPreview from './preview/manga'
import Modal from './modal'
import Header from './header'
import Columns from './columns'
import Drawer from './drawer'
import UserDrawer from './UserDrawer'

type Props = {
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch,
};

class App extends Component {
	props: Props;

	renderPreview() {
		const {currentIllustId, isImageView, isMangaView} = this.props.manage
		if (isImageView) {
			return <IllustPreview id={currentIllustId}/>
		} else if (isMangaView) {
			return <MangaPreview id={currentIllustId}/>
		}
	}

	handleClose = () => {
		this.props.dispatch(closeDrawer())
	}

	render() {
		const {columns, manage} = this.props

		return (
			<div>
				<Header/>
				<Columns columns={columns}/>
				{this.renderPreview()}
				<Drawer
					open={manage.isDrawer}
					onRequestClose={this.handleClose}
					width={600}
					>
					<UserDrawer/>
				</Drawer>
				{isModal && <Modal/>}
			</div>
		)
	}
}

const mapStateToProps = (state: State) => {
	const {manage, columns} = state

	return {
		manage,
		columns,
	}
}

export default connect(mapStateToProps)(App)
