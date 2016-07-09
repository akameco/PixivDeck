// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {ManageStateType, WorkType} from '../actions/type';
import {closeModal} from '../actions/modal';
import ImageModal from '../components/image-modal';
import RankingPage from './ranking-page';
import styles from './app.css';

type Props = {
	children: any,
	work: WorkType,
	works: Object,
	worksArray: Array<WorkType>,
	manage: ManageStateType,
	currentWorkId: number | null,
	dispatch: Dispatch
};

class App extends Component {
	props: Props;

	handleCloseModal = () => {
		this.props.dispatch(closeModal());
	};

	render() {
		const {works, manage, currentWorkId} = this.props;

		return (
			<div styleName="wrap">
				<RankingPage params={{mode: 'daily'}}/>
				<RankingPage params={{mode: 'weekly'}}/>
				<RankingPage params={{mode: 'monthly'}}/>
				{currentWorkId && works[currentWorkId] && manage.isModal &&
					<ImageModal
						show={manage.isModal}
						img={works[currentWorkId].imageUrls.large}
						onClose={this.handleCloseModal}
						/>
				}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, pixiv, result, manage} = state;
	const {works} = entities;
	const work = works[pixiv.currentWorkId] || null;
	const worksArray = manage.rankingIds.map(v => works[v]);

	return {
		work,
		works,
		result,
		worksArray,
		currentWorkId: pixiv.currentWorkId,
		manage
	};
}

export default connect(mapStateToProps)(cssModules(styles)(App));
