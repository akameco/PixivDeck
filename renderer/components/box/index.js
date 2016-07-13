import React, {Component} from 'react';
import type {Dispatch} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {WorkType, UserType} from '../../actions/type';
import {addColumn} from '../../actions/column';
import {openImageView, openMangaPreview, currentWork} from '../../actions/manage';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import BoxImage from './box-image';
import styles from './box.css';

type Props = {
	work: WorkType,
	user: UserType,
	dispatch: Dispatch
}

class Box extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return this.props.work.id !== nextProps.work.id;
	}

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
	}

	handleClick = () => {
		const {id, pageCount} = this.props.work;
		this.props.dispatch(currentWork(id));
		if (pageCount > 1) {
			this.props.dispatch(openMangaPreview());
		} else {
			this.props.dispatch(openImageView());
		}
	}

	render() {
		const {work, user} = this.props;
		const {title, caption, tags} = work;
		return (
			<div styleName="base">
				<BoxHeader name={user.name} account={user.account} img={user.profileImageUrls.px50x50}/>
				{title}
				{caption}
				<BoxImage work={work} onClick={this.handleClick}/>
				<BoxFooter tags={tags} onClickTag={this.handleTagClick}/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const user = state.entities.users[ownProps.work.user];
	return {
		user
	};
}

export default connect(mapStateToProps)(cssModules(Box, styles));
