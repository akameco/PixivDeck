// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State} from 'redux';
import type {WorkType} from '../../actions/type';
import {closeImageView} from '../../actions/manage';
import IllustPreviewBase from './illust-preview';

type Props = {
	work: WorkType,
	show: bool,
	dispatch: Dispatch
};

class IllustPreview extends Component {
	props: Props;

	handleClose = () => {
		this.props.dispatch(closeImageView());
	}

	render() {
		const {work, show} = this.props;
		return (
			<IllustPreviewBase
				show={show}
				img={work.imageUrls.large}
				onClose={this.handleClose}
				/>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage} = state;
	const {currentWorkId, isImageView} = manage;
	const work = entities.works[currentWorkId];

	return {
		work,
		show: isImageView
	};
}

export default connect(mapStateToProps)(IllustPreview);
