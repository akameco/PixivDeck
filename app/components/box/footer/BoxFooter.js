// @flow
import React, {Component} from 'react'
import union from 'lodash.union'
import Tag from './Tag'
import styles from './BoxFooter.css'

type Props = {
	onClickTag: (tag: string) => void,
	tags: Array<string>
};

export default class BoxFooter extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.tags.length !== this.props.tags.length
	}

	render() {
		const Tags = union(this.props.tags).map(item =>
			<Tag key={item} name={item} onClick={this.props.onClickTag}/>
		)
		return (
			<div className={styles.base}>
				{Tags}
			</div>
		)
	}
}
