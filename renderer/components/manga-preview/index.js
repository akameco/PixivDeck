// @flow
import React, {Component} from 'react';
import type {State, Dispatch} from 'redux';
import {connect} from 'react-redux';
import type {WorkType} from '../../actions/type';
import {closeMnagaPreview} from '../../actions/manage';
import Preview from './manga-preview';
import MultiPreview from './multi-preview';

type Props = {
	work: WorkType,
	show: bool,
	dispatch: Dispatch
};

class MangaPreviewContainer extends Component {
	props: Props;

	handleClose = () => {
		this.props.dispatch(closeMnagaPreview());
	}

	render() {
		const {work, show} = this.props;
		if (work.metadata && work.metadata.pages) {
			return <MultiPreview pages={work.metadata.pages} onClose={this.handleClose}/>;
		}

		return (
			<Preview
				show={show}
				img={work.imageUrls.large}
				onClose={this.handleClose}
				/>
		);
	}
}

function mapStateToProps(state: State) {
	const {entities, manage} = state;
	const {currentWorkId, isMangaView} = manage;
	const work: WorkType = entities.works[currentWorkId];

	return {
		work,
		show: isMangaView
	};
}

export default connect(mapStateToProps)(MangaPreviewContainer);
