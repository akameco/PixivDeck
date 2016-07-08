// @flow
import React, {Component} from 'react';
import ImageBox from './image-box';

type Props = {
	works: Array<Object>,
	onClick: (id: string) => void
};

export default class RankingList extends Component {
	props: Props;

	render() {
		const List = this.props.works.map(({id, title, imageUrls}) => (
			<ImageBox
				key={id}
				id={id}
				img={imageUrls.medium}
				title={title}
				onClick={this.props.onClick}
				/>
		));

		return (
			<div>
				{List}
			</div>
		);
	}
}
