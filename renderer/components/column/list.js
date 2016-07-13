// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import cssModules from 'react-css-modules';
import type {WorkType, UserType} from '../../actions/type';
import ImageBox from '../box';
import {CloseButton} from '../button';
import Infinite from './infinite';
import styles from './list.css';

type Props = {
	works: Array<WorkType>,
	users: Array<UserType>,
	title: string,
	onClick: (id: string) => void,
	onClickTag: (tag: string) => void,
	onNextPage: () => void,
	onClose: () => void
};

class List extends Component {
	props: Props;
	target: Component<*, *, *>

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
			const user = this.props.users[work.user];
			return (
				<ImageBox
					key={work.id}
					work={work}
					user={user}
					onClickTag={this.props.onClickTag}
					onClick={this.props.onClick}
					/>
			);
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

export default cssModules(List, styles);
