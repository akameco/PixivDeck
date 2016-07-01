// @flow
import React, {Component} from 'react';
import ImageBox from './image-box';

type Props = {
	works: Array<Object>,
	onClick: () => void
};

export default class RankingList extends Component {
	props: Props;

	render() {
		const List = this.props.works.map(({id, title, image_urls}) => (
			<ImageBox
				key={id}
				id={id}
				img={image_urls.px_128x128}
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
