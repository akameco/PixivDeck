// @flow
import React, {Component} from 'react'
import styles from './tag.css'

type Props = {
	tag: string,
	onClick: (tag: string) => void
};

export default class Tag extends Component {
	props: Props;

	handleRemoveTagFilter = () => {
		this.props.onClick(this.props.tag)
	}

	render() {
		return (
			<li className={styles.base}>
				{this.props.tag}
				<a onClick={this.handleRemoveTagFilter}>削除</a>
			</li>
		)
	}
}
