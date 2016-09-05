// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Manage, ColumnType} from '../types';
import {login} from '../actions';
import Auth from './auth';
import IllustPreview from './illust-preview';
import MangaPreview from './manga-preview';
import Modal from './modal';
import Header from './header';
import Columns from './app/columns';

type Props = {
	children: any,
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch
};

class App extends Component {
	props: Props;

	componentWillMount() {
		this.props.dispatch({type: 'INIT'});
	}

	handleAuth = (name: string, password: string) => {
		this.props.dispatch(login(name, password));
	}

	render() {
		const {isLogin, currentIllustId} = this.props.manage;
		if (!isLogin) {
			return <Auth onClick={this.handleAuth}/>;
		}

		return (
			<div>
				<Header/>
				<Columns columns={this.props.columns}/>
				{this.props.manage.isImageView && <IllustPreview id={currentIllustId}/>}
				{this.props.manage.isMangaView && <MangaPreview id={currentIllustId}/>}
				{this.props.manage.isModal && <Modal/>}
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
