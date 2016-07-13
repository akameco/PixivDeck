// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State} from 'redux';
import type {WorkType} from '../../actions/type';
import {closeImageView, finishImgLoaded, startImgLoading} from '../../actions/manage';
import IllustPreviewBase from './illust-preview';

type Props = {
	work: WorkType,
	show: bool,
	isLoaded: bool,
	dispatch: Dispatch
};

class IllustPreview extends Component {
	props: Props;

	handleClose = () => {
		this.props.dispatch(closeImageView());
	}

	handleLoad = () => {
		this.props.dispatch(finishImgLoaded());
	}

	handleUnLoad = () => {
		this.props.dispatch(startImgLoading());
	}

	render() {
		const {work, show} = this.props;
		return (
			<IllustPreviewBase
				show={show}
				from={work.imageUrls.medium}
				width={work.width}
				height={work.height}
				to={work.imageUrls.large}
				isLoaded={this.props.isLoaded}
				onLoad={this.handleLoad}
				onUnLoad={this.handleUnLoad}
				onClose={this.handleClose}
				/>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage} = state;
	const {currentWorkId, isImageView, isImgLoaded} = manage;
	const work = entities.works[currentWorkId];

	return {
		work,
		show: isImageView,
		isLoaded: isImgLoaded
	};
}

export default connect(mapStateToProps)(IllustPreview);
