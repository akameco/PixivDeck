// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './dropdown.css';

type Props = {
	onOpenFilterModal: () => void,
	onLogout: () => void
};

@CSSModules(styles)
export default class Dropdwon extends Component {
	props: Props;

	render() {
		return (
			<div styleName="base">
				<ul>
					<li>
						<a onClick={this.props.onOpenFilterModal}>
							設定
						</a>
					</li>
					<li styleName="h"></li>
					<li>
						<a onClick={this.props.onLogout}>
							ログアウト
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
