// @flow
import React, {Component} from 'react'
import styles from './Loading.css'

const defaultStyle = {
	wrap: {
		background: '#eee',
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
}

type Props = {
	wrapStyle?: Object,
	style?: Object,
};

export default class Loading extends Component {
	props: Props;

	render() {
		const wrapStyle = Object.assign({}, defaultStyle.wrap, this.props.wrapStyle)
		return (
			<div style={wrapStyle}>
				<div className={styles.spinner} style={this.props.style}>
					<div/>
					<div className={styles.rect2}/>
					<div className={styles.rect3}/>
					<div className={styles.rect4}/>
					<div className={styles.rect5}/>
				</div>
			</div>
		)
	}
}
