// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Manage, ColumnType} from '../types';
import {login, init} from '../actions';
import Auth from './auth';
import IllustPreview from './illust-preview';
import MangaPreview from './manga-preview';
import Modal from './modal';
import Header from './header';
import Columns from './app/columns';
import Drawer from './drawer';

type Props = {
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch
};

class App extends Component {
	props: Props;

	componentWillMount() {
		this.props.dispatch(init());
	}

	handleAuth = (name: string, password: string) => {
		this.props.dispatch(login(name, password));
	}

	renderPreview() {
		const {currentIllustId, isImageView, isMangaView} = this.props.manage;
		if (isImageView) {
			return <IllustPreview id={currentIllustId}/>;
		} else if (isMangaView) {
			return <MangaPreview id={currentIllustId}/>;
		}
	}

	render() {
		const {isLogin, isLoginSuccess, isDrawer, isModal} = this.props.manage;
		if (!isLogin) {
			return <Auth onClick={this.handleAuth} isLoginSuccess={isLoginSuccess}/>;
		}

		return (
			<div>
				<Header/>
				<Columns columns={this.props.columns}/>
				{this.renderPreview()}
				<Drawer isOpen={isDrawer}/>
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
