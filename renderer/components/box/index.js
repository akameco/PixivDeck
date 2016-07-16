// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import type {Dispatch, State, Work, User} from '../../types/';
import {addColumn} from '../../actions/column';
import {openImageView, openMangaPreview, currentWork} from '../../actions/manage';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import BoxImage from './box-image';
import styles from './box.css';

type Props = {
	work: Work,
	user: User,
	dispatch: Dispatch
};

@CSSModules(styles)
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

function mapStateToProps(state: State, ownProps: Props) {
	const user = state.entities.users[ownProps.work.user];
	return {
		user
	};
}

export default connect(mapStateToProps)(Box);
