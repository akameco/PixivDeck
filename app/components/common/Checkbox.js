// @flow
import React, {Component} from 'react'
import css from 'react-css-modules'
import styles from './Checkbox.css'

type Props = {
	defaultChecked?: bool,
	value: bool,
	text: string,
	onChange: () => void,
	id: string
};

@css(styles)
export default class Checkbox extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.value !== this.props.value
	}

	render() {
		return (
			<div styleName="wrap">
				<div styleName="checkbox">
					<label styleName="switch">
						<input
							type="checkbox"
							defaultChecked={this.props.defaultChecked || false}
							value={this.props.value}
							onChange={this.props.onChange}
							id={this.props.id}
							/>
						<span styleName="track"/>
						<span styleName="button"/>
					</label>
					<label styleName="message" htmlFor={this.props.id}>
						{this.props.text}
					</label>
				</div>
			</div>
		)
	}
}
