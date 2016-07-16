// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import Avater from './avater';
import styles from './box-header.css';

type Props = {
	name: string,
	account: string,
	img: string
};

@CSSModules(styles)
export default class BoxHeader extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.name !== nextProps.name;
	}

	render() {
		const {name, account, img} = this.props;
		return (
			<div styleName="base">
				<Avater img={img}/>
				<div styleName="profile-area">
					<p>
						<span styleName="name">{name}</span>
						<span styleName="account">{account}</span>
					</p>
				</div>
			</div>
		);
	}
}
