// @flow
import React, {Component} from 'react';

type Props = {
	id: string,
	title: string,
	img: string,
	handleClick: (id: string) => void
};

class ImageBox extends Component {
	props: Props;

	render() {
		const {id, title, img} = this.props;
		return (
			<div onClick={() => this.props.handleClick(id)} styleName="image-box">
				<div>
					{title}
				</div>
				<img src={img}/>
			</div>
		);
	}
}

export default ImageBox;
