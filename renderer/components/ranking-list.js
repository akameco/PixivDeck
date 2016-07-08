// @flow
import React, {Component} from 'react';
import ImageBox from './image-box';

type Props = {
	works: Array<Object>,
	users: Array<Object>,
	onClick: (id: string) => void
};

export default class RankingList extends Component {
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
				{List}
			</div>
		);
	}
}
