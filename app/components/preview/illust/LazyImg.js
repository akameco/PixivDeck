// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import CloseButton from '../../common/CloseButton'
import styles from './Lazyimg.css'

type Size = {
	width: number | 'auto',
	height: number | 'auto'
}

function calcSize(width: number, height: number): Size {
	const {innerWidth, innerHeight} = window
	if (height > innerHeight && width > innerWidth) {
		return (width * innerHeight < height * innerWidth) ?
			{width: 'auto', height: innerHeight} :
		{
			width: innerWidth,
			height: 'auto',
		}
	}
	if (height > innerHeight) {
		return {width: 'auto', height: innerHeight}
	}
	if (width > innerWidth) {
		return {width: innerWidth, height: 'auto'}
	}

	return {width, height}
}

type Props = {
	from: string,
	to: string,
	width: number,
	height: number,
	isLoaded: bool,
	onLoad: () => void,
	onClose: () => void
}

type State = {
	isClicked: bool,
	fromMarginTop: number,
	toMarginTop: number
}

export default class LazyImg extends Component {
	props: Props;
	to: Component<*, *, *>
	from: Component<*, *, *>
	state: State = {
		isClicked: false,
		fromMarginTop: 0,
		toMarginTop: 0,
	};

	componentDidMount() {
		const to = this.calcMarginTop(findDOMNode(this.to))
		const from = this.calcMarginTop(findDOMNode(this.from))
		this.setState({
			toMarginTop: to,
			fromMarginTop: from,
		})
	}

	componentWillUpdate(nextProps: Props, nextState: State) {
		const to = this.calcMarginTop(findDOMNode(this.to))
		const from = this.calcMarginTop(findDOMNode(this.from))
		if (
			this.props.isLoaded !== nextProps.isLoaded ||
			nextState.isClicked !== this.state.isClicked ||
			nextState.fromMarginTop !== from ||
			nextState.toMarginTop !== to
		) {
			this.setState({
				toMarginTop: to,
				fromMarginTop: from,
			})
		}
	}

	handleLoad = () => {
		const img = new Image()
		const {to, onLoad} = this.props
		img.onload = () => {
			onLoad()
		}
		img.src = to
	}

	calcMarginTop(node: HTMLElement): number {
		if (node) {
			const height = node && node.clientHeight
			if (window.innerHeight > height) {
				const top = (window.innerHeight - height) / 2
				return top
			}
		}
		return 0
	}

	selectStyle(isLoaded: bool, isClick: bool): string {
		if (isLoaded && isClick) {
			return 'isClick'
		}
		if (isLoaded) {
			return 'loaded'
		}
		return 'loading'
	}

	handleClick = (event: SyntheticEvent) => { // eslint-disable-line no-undef
		event.stopPropagation()
		this.setState({isClicked: !this.state.isClicked})
	}

	render() {
		const {width, height, isLoaded, onClose} = this.props
		const {isClicked} = this.state

		const style = this.selectStyle(isLoaded, isClicked)
		const toStyle = {marginTop: `${this.state.toMarginTop}px`}
		const fromStyle = Object.assign(
			{},
			calcSize(width, height),
			{marginTop: `${this.state.fromMarginTop}px`}
		)

		if (isLoaded) {
			return (
				<div className={styles.wrap}>
					<CloseButton
						style={{color: '#676767', top: '10px', right: '10px'}}
						iconStyle={{fill: 'white'}}
						onClick={onClose}
						/>
					<img
						src={this.props.to}
						width={width}
						height={height}
						style={toStyle}
						className={styles[style]}
						onClick={this.handleClick}
						ref={c => { // eslint-disable-line react/jsx-no-bind
							this.to = c
						}}
						/>
				</div>
			)
		}

		return (
			<div className={styles.wrap}>
				<CloseButton onClick={onClose} iconStyle={{fill: 'white'}}/>
				<img
					src={this.props.from}
					className={styles.from}
					style={fromStyle}
					onLoad={this.handleLoad}
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this.from = c
					}}
					/>
			</div>
		)
	}
}
