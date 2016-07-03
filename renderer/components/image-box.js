// @flow
import React, {Component} from 'react';
import {Link} from 'react-router';

type Props = {
	id: string,
	title: string,
	img: string,
	onClick: (id: string) => void
};

class ImageBox extends Component {
	props: Props;

	render() {
		const {id, title, img} = this.props;
		return (
			<div styleName="image-box">
				<img
					src={img}
					onClick={() => this.props.onClick(id)}
					/>
				<br/>
				<Link to={`work/${id}`}>
					{title}
				</Link>
			</div>
		);
	}
}

export default ImageBox;
