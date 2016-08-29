// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Work} from '../../types';
import {closeImageView, finishImgLoaded, startImgLoading} from '../../actions/manage';
import Preview from './illust-preview';

type Props = {
	id: number,
	work: Work,
	show: bool,
	isLoaded: bool,
	dispatch: Dispatch
};

class IllustPreview extends Component {
	props: Props;

	componentWillMount() {
		if (!this.props.work) {
			this.props.dispatch(closeImageView());
		}
	}

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
			<Preview
				show={show}
				from={work.imageUrls.px480mw}
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

function mapStateToProps(state: State, ownProps) {
	const {entities, manage} = state;
	const {isImageView, isImgLoaded} = manage;
	const work = entities.works[ownProps.id];

	return {
		work,
		show: isImageView,
		isLoaded: isImgLoaded
	};
}

export default connect(mapStateToProps)(IllustPreview);
