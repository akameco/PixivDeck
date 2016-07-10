// @flow
import React, {Component} from 'react';
import type {WorkType, UserType} from '../actions/type';
import ImageBox from './image-box';

type Props = {
	works: Array<WorkType>,
	users: Array<UserType>,
	title: string,
	onClick: (id: string) => void
};

export default class List extends Component {
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
			<div>
				<h1>{this.props.title}</h1>
				{List}
			</div>
		);
	}
}
