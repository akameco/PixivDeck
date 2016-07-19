// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import css from 'react-css-modules';
import type {Work} from '../../types';
import {MangaIcon} from '../icon/';
import styles from './box-image.css';

type Props = {
	work: Work,
	onClick: () => void
};

type State = {
	isVisible: bool,
	isLoaded: bool
};

@css(styles)
export default class BoxImage extends Component {
	props: Props;
	state: State;
	target: Component<*, *, *>;
	io: Object;

	constructor(props: Props) {
		super(props);
		this.state = {
			isVisible: false,
			isLoaded: false
		};
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		if (this.state.isLoaded !== nextState.isLoaded) {
			return true;
		}
		if (this.state.isVisible !== nextState.isVisible) {
			return true;
		}
		return false;
	}

	componentDidMount() {
		const target = this.target;
		this.io = new IntersectionObserver(entries => { // eslint-disable-line no-undef
			const intersectionRatio = entries[0].intersectionRatio;
			if (intersectionRatio <= 0) {
				this.setState({isVisible: false});
			}
			this.update();
		}, {
			rootMargin: '500px'
		});
		this.io.observe(findDOMNode(target));
	}

	componentWillUnmount() {
		this.io.unobserve(findDOMNode(this.target));
	}

	update() {
		this.setState({isVisible: true});

		const img = new Image();
		img.onload = () => {
			this.setState({isLoaded: true});
		};
		img.src = this.props.work.imageUrls.medium;
	}

	handleRefs = (c: Component<*, *, *>) => {
		this.target = c;
	}

	render() {
		const {imageUrls, pageCount} = this.props.work;
		return (
			<div
				ref={this.handleRefs}
				styleName="base"
				>
				{pageCount > 1 &&
					<MangaIcon/>
				}
				{this.state.isVisible && this.state.isLoaded ?
					<img
						styleName="loaded"
						src={imageUrls.medium}
						onClick={this.props.onClick}
						/> :
					<img height={200}/>
				}
			</div>
		);
	}
}
