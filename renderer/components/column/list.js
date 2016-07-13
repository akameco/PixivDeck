// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import CSSModules from 'react-css-modules';
import type {WorkType} from '../../actions/type';
import Box from '../box';
import {CloseButton} from '../button';
import Infinite from './infinite';
import styles from './list.css';

type Props = {
	works: Array<WorkType>,
	title: string,
	onClick: (id: string) => void,
	onClickTag: (tag: string) => void,
	onNextPage: () => void,
	onClose: () => void
};

@CSSModules(styles)
export default class List extends Component {
	props: Props;
	target: Component<*, *, *>

	shouldComponentUpdate(nextProps: Props) {
		if (this.props.works.length !== nextProps.works.length) {
			return true;
		}
		return false;
	}

	handleScrollTop = (e: Event) => {
		e.preventDefault();
		const node = findDOMNode(this.target);
		node.scrollTop = 0;
	};

	handleClose = () => {
		this.props.onClose();
	}

	render() {
		const List = this.props.works.map(work => {
			return <Box key={work.id} work={work}/>;
		});

		return (
			<section styleName="wrap">
				<header>
					<a styleName="title" onClick={this.handleScrollTop}>
						{this.props.title}
					</a>
					<CloseButton onClick={this.handleClose}/>
				</header>
				{this.props.works.length > 0 ?
					<div styleName="content">
						<Infinite
							ref={c => {
								this.target = c;
							}}
							onIntersect={() => this.props.onNextPage()}
							>
							{List}
						</Infinite>
					</div> :
					<div>loading</div>
				}
			</section>
		);
	}
}
