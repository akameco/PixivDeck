// @flow
import React from 'react'
import union from 'lodash.union'
import Tag from './Tag'
import styles from './BoxFooter.css'

type Props = {
	onClickTag: (tag: string) => void,
	tags: Array<string>
}

export default class BoxFooter extends React.PureComponent {
	props: Props;

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
