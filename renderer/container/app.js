import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {ranking} from '../actions';

class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func
	};

	onClick() {
		this.props.dispatch(ranking());
	}

	render() {
		const List = this.props.works.map(({id, title, image_urls}) => (
			<div key={id}>
				{title}
				<img src={image_urls.px_480mw}/>
			</div>
		));

		return (
			<div>
				<a onClick={::this.onClick}>reload</a>
				<br/>
				{List}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {works: state.pixiv.works};
}

export default connect(mapStateToProps)(App);
