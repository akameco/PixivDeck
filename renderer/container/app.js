import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import {
	ranking,
	currentWork,
	toggleModal,
	closeModal
} from '../actions';
import styles from './app.css';

@CSSModules(styles)
class ImageBox extends Component {
	render() {
		const {id, title, img} = this.props;
		return (
			<div onClick={() => this.props.handleClick(id)} styleName="image-box">
				<div>
					{this.props.title}
				</div>
				<img src={this.props.img}/>
			</div>
		);
	}
}

@CSSModules(styles)
class ImageModal extends Component {
	static propTypes = {
		title: PropTypes.string,
		img: PropTypes.string
	}

	render() {
		const style = this.props.show ? {display: 'flex'} : {display: 'none'};
		return (
			<div styleName="image-modal" style={style} onClick={this.props.onClose}>
				<img src={this.props.img}/>
			</div>
		);
	}
}

@CSSModules(styles)
class App extends Component {
	static propTypes = {
		works: PropTypes.array,
		currentWork: PropTypes.number,
		manage: PropTypes.object,
		dispatch: PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(ranking());
	}

	onClickWork(id) {
		this.props.dispatch(toggleModal());
		this.props.dispatch(currentWork(id));
		this.scrollStop();
	}

	selectWork() {
		const work = this.props.works.filter(work => work.id === this.props.currentWork);
		if (!work) {
			return;
		}
		return work[0];
	}

	handleCloseModal() {
		this.props.dispatch(closeModal());
		const body = document.querySelector('body');
		body.style.overflow = 'auto';
	}

	scrollStop() {
		const body = document.querySelector('body');
		body.style.overflow = 'hidden';
	}

	render() {
		const {works, currentWork, manage, dispatch} = this.props;
		const List = works.map(({id, title, image_urls}) => (
			<ImageBox
				key={id}
				id={id}
				img={image_urls.px_128x128}
				title={title}
				handleClick={::this.onClickWork}
				/>
		));

		// const style = this.fixedPosition() || {};
		const style = {};

		return (
			<div style={style}>
				<div>
					{List}
				</div>
				{works.length > 0 &&
					<ImageModal
					show={manage.isModal}
					img={this.selectWork().image_urls.px_480mw}
					onClose={::this.handleCloseModal}
					/>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		works: state.pixiv.works,
		currentWork: state.pixiv.currentWork,
		manage: state.manage
	};
}

export default connect(mapStateToProps)(App);
