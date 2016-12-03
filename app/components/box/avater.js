// @flow
import React, {Component} from 'react'
import styles from './avater.css'

type Props = {
	img: string
};

export default class Avater extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.img !== this.props.img
	}

	render() {
		return (
			<div className={styles.avater}>
				<img src={this.props.img}/>
			</div>
		)
	}
}
