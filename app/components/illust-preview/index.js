// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Dispatch, State, Illust} from '../../types'
import {closeImageView, finishImgLoaded, startImgLoading} from '../../actions/manage'
import Preview from './illust-preview'

type Props = {
	illust: Illust,
	show: bool,
	isLoaded: bool,
	dispatch: Dispatch
};

class IllustPreview extends Component {
	props: Props;

	componentWillMount() {
		if (!this.props.illust) {
			this.props.dispatch(closeImageView())
		}
	}

	handleClose = () => {
		this.props.dispatch(closeImageView())
	}

	handleLoad = () => {
		this.props.dispatch(finishImgLoaded())
	}

	handleUnLoad = () => {
		this.props.dispatch(startImgLoading())
	}

	render() {
		const {illust, show} = this.props
		return (
			<Preview
				show={show}
				from={illust.imageUrls.large}
				width={illust.width}
				height={illust.height}
				to={illust.metaSinglePage.originalImageUrl}
				isLoaded={this.props.isLoaded}
				onLoad={this.handleLoad}
				onUnLoad={this.handleUnLoad}
				onClose={this.handleClose}
				/>
		)
	}
}

function mapStateToProps(state: State, ownProps) {
	const {entities, manage} = state
	const {isImageView, isImgLoaded} = manage
	const illust = entities.illusts[ownProps.id]

	return {
		illust,
		show: isImageView,
		isLoaded: isImgLoaded,
	}
}

export default connect(mapStateToProps)(IllustPreview)
