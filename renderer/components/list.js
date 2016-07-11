// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {WorkType, UserType} from '../actions/type';
import Infinite from './infinite';
import ImageBox from './image-box';
import styles from './list.css';

type Props = {
	works: Array<WorkType>,
	users: Array<UserType>,
	title: string,
	onClick: (id: string) => void,
	onNextPage: () => void
};

class List extends Component {
	props: Props;

	render() {
		const List = this.props.works.map(work => {
			const user = this.props.users[work.user];
			return (
				<ImageBox
					key={work.id}
					work={work}
					user={user}
					onClick={this.props.onClick}
					/>
			);
		});

		return (
			<section styleName="wrap">
				<header>
					<span styleName="title">{this.props.title}</span>
				</header>
				<div styleName="content">
					<Infinite onIntersect={() => this.props.onNextPage()}>
						{List}
					</Infinite>
				</div>
			</section>
		);
	}
}

export default cssModules(List, styles);
