// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Manage, ColumnType} from '../types';
import IllustPreview from './illust-preview';
import MangaPreview from './manga-preview';
import Modal from './modal';
import Header from './header';
import Columns from './app/columns';
import UserDrawer from './drawer/user-drawer';

type Props = {
	columns: Array<ColumnType>,
	manage: Manage
};

class App extends Component {
	props: Props;

	renderPreview() {
		const {currentIllustId, isImageView, isMangaView} = this.props.manage;
		if (isImageView) {
			return <IllustPreview id={currentIllustId}/>;
		} else if (isMangaView) {
			return <MangaPreview id={currentIllustId}/>;
		}
	}

	render() {
		const {isModal} = this.props.manage;

		return (
			<div>
				<Header/>
				<Columns columns={this.props.columns}/>
				{this.renderPreview()}
				<UserDrawer/>
				{isModal && <Modal/>}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {manage, columns} = state;

	return {
		manage,
		columns
	};
}

export default connect(mapStateToProps)(App);
