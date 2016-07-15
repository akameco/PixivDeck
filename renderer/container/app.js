// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import type {Dispatch, State, Manage, ColumnType} from '../types';
import {login} from '../actions/manage';
import Auth from '../components/auth/';
import IllustPreview from '../components/illust-preview/';
import MangaPreview from '../components/manga-preview/';
import Modal from '../components/modal';
import Header from '../components/header/';
import Column from '../components/column/';
import styles from './app.css';

type Props = {
	children: any,
	columns: Array<ColumnType>,
	manage: Manage,
	dispatch: Dispatch
};

@CSSModules(styles)
class App extends Component {
	props: Props;

	componentWillMount() {
		this.props.dispatch({type: 'INIT'});
	}

	handleAuth = (name: string, password: string) => {
		this.props.dispatch(login(name, password));
	}

	render() {
		const {isLogin, currentWorkId} = this.props.manage;
		if (!isLogin) {
			return <Auth onClick={this.handleAuth}/>;
		}

		const Columns = this.props.columns.map(column => (
			<Column key={column.id} column={column}/>
		));

		return (
			<div styleName="wrap">
				<Header/>
				<div styleName="content">
					{Columns}
				</div>
				{this.props.manage.isImageView && <IllustPreview id={currentWorkId}/>}
				{this.props.manage.isMangaView && <MangaPreview id={currentWorkId}/>}
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
