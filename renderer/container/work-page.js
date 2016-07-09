import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import type {State} from 'redux';
import {connect} from 'react-redux';
import {openModal} from '../actions/modal';
import {fetchWork} from '../actions/';

type Props = {
	id: number,
	work: Object,
	params: Object
};

class DetailPage extends Component {
	props: Props;
	state: {
		work: Object
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			work: null
		};
	}

	componentWillMount() {
		fetchWork(this.props.params.id);
	}

	render() {
		const {work} = this.props;
		if (!work) {
			return (<div></div>);
		}
		const tags = work.tags.map(v => (
			<a key={v}>・{v}</a>
		));

		return (
			<div>
				<h2>{work.title}</h2>
				<br/>
				{work.caption}
				<img
					src={work.imageUrls.px480mw}
					/>
				<div>
					<div>
						<img src={work.user.profileImageUrls.px50x50}/>
						{work.user.name}
					</div>
					<div>
						{tags}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const {id} = ownProps;
	const {entities, manage, result} = state;
	const {works, users} = entities;
	const work = works[result];

	return {
		work,
		id,
		manage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		openModal
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
