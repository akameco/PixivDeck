// @flow
import React, {Component} from 'react';
import {Link} from 'react-router';
import BoxHeader from './box-header';

type Props = {
	work: {
		id: number,
		title: string,
		caption: string,
		tags: Array<string>,
		imageUrls: Object
	},
	user: {
		name: string,
		account: string,
		profileImageUrls: Object
	},
	onClick: (id: string) => void
};

class ImageBox extends Component {
	props: Props;

	render() {
		const {work, user} = this.props;
		const {id, title, imageUrls, caption, tags} = work;
		return (
			<div styleName="image-box">
				<BoxHeader
					name={user.name}
					account={user.account}
					img={user.profileImageUrls.px50x50}
					/>
				<Link to={`work/${id}`}>
					{title}
				</Link>
				<img
					src={imageUrls.medium}
					onClick={() => this.props.onClick(id)}
					/>
				<br/>
				{caption}
				{tags}
			</div>
		);
	}
}

export default ImageBox;
