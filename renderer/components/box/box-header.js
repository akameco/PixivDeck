// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import Avater from './avater';
import styles from './box-header.css';

type Props = {
	name: string,
	account: string,
	img: string,
	title: string,
	caption?: string,
	onClick: () => void
};

@css(styles)
export default class BoxHeader extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.name !== nextProps.name;
	}

	render() {
		const {name, account, img, title, caption} = this.props;
		return (
			<div styleName="base">
				<Avater img={img}/>
				<div styleName="wrap">
					<div styleName="title">{title}</div>
					<div styleName="profile-area">
						<p styleName="profile-area-line">
							<a styleName="name" onClick={this.props.onClick}>{name}</a>
							<span styleName="account">{account}</span>
						</p>
					</div>
					<div styleName="body">
						{caption}
					</div>
				</div>
			</div>
		);
	}
}
