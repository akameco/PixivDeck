// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import styles from './tag.css';

type Props = {
	tag: string,
	onClick: (tag: string) => void
};

@css(styles)
export default class Tag extends Component {
	props: Props;

	handleRemoveTagFilter = () => {
		this.props.onClick(this.props.tag);
	}

	render() {
		return (
			<li styleName="base">
				{this.props.tag}
				<a onClick={this.handleRemoveTagFilter}>削除</a>
			</li>
		);
	}
}
