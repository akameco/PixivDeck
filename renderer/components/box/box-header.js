// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import Avater from './avater';
import styles from './box-header.css';

type Props = {
	name: string,
	account: string,
	img: string
};

class BoxHeader extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return this.props.name !== nextProps.name;
	}

	render() {
		const {name, account, img} = this.props;
		return (
			<div styleName="base">
				<Avater img={img}/>
				<div styleName="area">
					<span styleName="name">{name}</span>
					<span styleName="account">{account}</span>
				</div>
			</div>
		);
	}
}

export default cssModules(BoxHeader, styles);
