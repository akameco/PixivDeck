// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import css from 'react-css-modules';
import type {Work} from '../../types';
import Box from '../box';
import {CloseButton} from '../button';
import {LoadingIcon} from '../icon';
import Infinite from './infinite';
import styles from './list.css';

type Props = {
	id: number,
	works: Array<Work>,
	title: string,
	onNextPage: () => void,
	onReload: (id: number) => void,
	onClose: () => void
};

@css(styles)
export default class List extends Component {
	props: Props;
	target: Component<*, *, *>

	shouldComponentUpdate(nextProps: Props) {
		if (this.props.works.length !== nextProps.works.length) {
			return true;
		}
		return false;
	}

	handleTopClick = (e: Event) => {
		this.props.onReload(this.props.id);
		e.preventDefault();
		const node: HTMLElement = findDOMNode(this.target);
		if (node) {
			node.scrollTop = 0;
		}
	};

	handleClose = () => {
		this.props.onClose();
	}

	// ignore event prop to react-sortable-pane
	handleMove = (e: Event) => {
		e.stopPropagation();
	}

	render() {
		const List = this.props.works.map(work => {
			return <Box key={work.id} work={work}/>;
		});

		return (
			<section styleName="wrap">
				<header styleName="header">
					<a styleName="title" onClick={this.handleTopClick}>
						{this.props.title}
					</a>
					<CloseButton onClick={this.handleClose}/>
				</header>
				{this.props.works.length > 0 ?
					<div
						styleName="content"
						onMouseDown={this.handleMove}
						onTouchStart={this.handleMove}
						>
						<Infinite
							ref={(c: Component<*, *, *>) => {
								this.target = c;
							}}
							onIntersect={() => this.props.onNextPage()}
							>
							{List}
						</Infinite>
					</div> :
					<div styleName="loading">
						<LoadingIcon/>
					</div>
				}
			</section>
		);
	}
}
