// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State, Manage, ColumnType} from '../types'
import IllustPreview from './illust-preview'
import MangaPreview from './manga-preview'
import Modal from './modal'
import Header from './header'
import Columns from './column/columns'
import Drawer from './drawer'
import UserDrawer from './drawer/UserDrawerContainer'

type Props = {
	columns: Array<ColumnType>,
	manage: Manage
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

	render() {
		const {manage, columns} = this.props
		const {isModal, isDrawer} = manage

		return (
			<div>
				<Header/>
				<Columns columns={columns}/>
				{this.renderPreview()}
				<Drawer isDrawer={isDrawer}>
					{isDrawer && <UserDrawer/>}
				</Drawer>
				{isModal && <Modal/>}
			</div>
		)
	}
}

function mapStateToProps(state: State) {
	const {manage, columns} = state

	return {
		manage,
		columns,
	}
}

export default connect(mapStateToProps)(App)
