// @flow
import React, {Component} from 'react';

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
			<div onClick={() => this.props.onClick(id)} styleName="image-box">
				<img src={img}/>
				<br/>
				{title}
			</div>
		);
	}
}

export default ImageBox;
