// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {State, Dispatch, Work} from '../../types';
import {closeMnagaPreview} from '../../actions/manage';
import Preview from './manga-preview';
import MultiPreview from './multi-preview';

type Props = {
	id: number,
	work: Work,
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

function mapStateToProps(state: State, ownProps) {
	const {entities, manage} = state;
	const {isMangaView} = manage;
	const work: Work = entities.works[ownProps.id];

	return {
		work,
		show: isMangaView
	};
}

export default connect(mapStateToProps)(MangaPreviewContainer);
