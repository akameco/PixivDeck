// @flow
import React, {Component} from 'react';
import {Link} from 'react-router';

type Props = {
	work: Object,
	user: Object,
	onClick: (id: string) => void
};

class ImageBox extends Component {
	props: Props;

	render() {
		const {work, user} = this.props;
		const {id, title, imageUrls, caption, tags} = work;
		return (
			<div styleName="image-box">
				<img
					src={imageUrls.medium}
					onClick={() => this.props.onClick(id)}
					/>
				<br/>
				{caption}
				{tags}
				{user.name}
				<img src={user.profileImageUrls.px50x50}/>
				<Link to={`work/${id}`}>
					{title}
				</Link>
			</div>
		);
	}
}

export default ImageBox;
