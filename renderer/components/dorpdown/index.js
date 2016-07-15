// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import {logout, openModal} from '../../actions/manage';
import type {Dispatch} from '../../types';
import styles from './dropdown.css';

type Props = {
	dispatch: Dispatch
};

@CSSModules(styles)
class Dropdwon extends Component {
	props: Props;

	handleLogout = () => {
		this.props.dispatch(logout());
	}

	handleOpenModal = () => {
		this.props.dispatch(openModal());
	}

	render() {
		return (
			<div styleName="base">
				<ul>
					<li>
						<a onClick={this.handleOpenModal}>
							設定
						</a>
					</li>
					<li styleName="h"></li>
					<li>
						<a onClick={this.handleLogout}>
							ログアウト
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect()(Dropdwon);
