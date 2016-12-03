// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {State, Dispatch, Illust} from '../../../types'
import {closeMnagaPreview} from '../../../actions'
import Preview from './MangaPreview'
import MultiPreview from './MultiPreview'

type Props = {
	illust: Illust,
	show: bool,
	dispatch: Dispatch
};

class MangaPreviewContainer extends Component {
	props: Props;

	handleClose = () => {
		this.props.dispatch(closeMnagaPreview())
	}

	render() {
		const {illust, show} = this.props
		if (illust.metaPages) {
			return <MultiPreview pages={illust.metaPages} onClose={this.handleClose}/>
		}

		return (
			<Preview
				show={show}
				img={illust.imageUrls.large}
				onClose={this.handleClose}
				/>
		)
	}
}

function mapStateToProps({illustById, manage: {isMangaView}}: State, {id}) {
	const illust = illustById[id]

	return {
		illust,
		show: isMangaView,
	}
}

export default connect(mapStateToProps)(MangaPreviewContainer)
