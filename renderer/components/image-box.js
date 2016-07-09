// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import BoxHeader from './box-header';
import BoxFooter from './box-footer';
import styles from './image-box.css';

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
			<div styleName="base">
				<BoxHeader
					name={user.name}
					account={user.account}
					img={user.profileImageUrls.px50x50}
					/>
				{title}
				{caption}
				<img
					src={imageUrls.medium}
					onClick={() => this.props.onClick(id)}
					/>
				<br/>
				<BoxFooter tags={tags}/>
			</div>
		);
	}
}

export default cssModules(ImageBox, styles);
