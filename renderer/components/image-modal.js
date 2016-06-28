import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './image-modal.css';

@CSSModules(styles)
export default class ImageModal extends Component {
	static propTypes = {
		title: PropTypes.string,
		img: PropTypes.string,
		show: PropTypes.bool,
		onClose: PropTypes.func
	}

	render() {
		const style = this.props.show ? {display: 'flex'} : {display: 'none'};
		return (
			<div styleName="image-modal" style={style} onClick={this.props.onClose}>
				<img src={this.props.img}/>
			</div>
		);
	}
}
