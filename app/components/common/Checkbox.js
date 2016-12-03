// @flow
import React, {Component} from 'react'
import styles from './Checkbox.css'

type Props = {
	defaultChecked?: bool,
	value: bool,
	text: string,
	onChange: () => void,
	id: string
};

export default class Checkbox extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.value !== this.props.value
	}

	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.checkbox}>
					<label className={styles.switch}>
						<input
							type="checkbox"
							defaultChecked={this.props.defaultChecked || false}
							value={this.props.value}
							onChange={this.props.onChange}
							id={this.props.id}
							/>
						<span className={styles.track}/>
						<span className={styles.button}/>
					</label>
					<label className={styles.message} htmlFor={this.props.id}>
						{this.props.text}
					</label>
				</div>
			</div>
		)
	}
}
