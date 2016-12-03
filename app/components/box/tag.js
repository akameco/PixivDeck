// @flow
import React, {Component} from 'react'
import styles from './tag.css'

type Props = {
	onClick: (tag: string) => void,
	name: string
};

export default class Tag extends Component {
	props: Props;

	shouldComponentUpdate() {
		return false
	}

	handleClick = () => {
		this.props.onClick(this.props.name)
	}

	render() {
		return (
			<a onClick={this.handleClick} className={styles.tag}>
				#{this.props.name}
			</a>
		)
	}
}
