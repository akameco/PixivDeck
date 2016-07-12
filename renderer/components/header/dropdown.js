// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './dropdown.css';

type Props = {
	onClick: () => void,
	onLogout: () => void
};

class Dropdwon extends Component {
	props: Props;

	render() {
		return (
			<div styleName="base">
				<li>
					<a onClick={this.props.onLogout}>
						ログアウト
					</a>
				</li>
			</div>
		);
	}
}

export default cssModules(Dropdwon, styles);
