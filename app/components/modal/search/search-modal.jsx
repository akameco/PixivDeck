// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import Icon from '../../icon';
import styles from './search-modal.css';

type Props = {
	onSubmit: (tag: string) => void
};

type State = {
	value: string
};

@css(styles)
export default class SearchModal extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {value: ''};
	}

	handleChange = (event: any) => {
		this.setState({value: event.target.value});
	}

	handleSubmit = (event: SyntheticKeyboardEvent) => { // eslint-disable-line no-undef
		const text = this.state.value.trim();
		if (event.which === 13 && text !== '') {
			this.props.onSubmit(text);
			this.setState({value: ''});
		}
	}

	handleClick = (n: number) => {
		const text = this.state.value.trim();
		if (text !== '') {
			this.props.onSubmit(`${text}${n}users入り`);
		}
	}

	renderList() {
		if (this.state.value === '') {
			return;
		}
		const list = [100, 500, 1000, 3000, 5000, 10000].map(v => {
			const onClick = () => this.handleClick(v);
			return (
				<li key={v}>
					<a onClick={onClick}>{`${this.state.value}${v}users入り`}</a>
				</li>
			);
		});
		return (
			<ul>
				{list}
			</ul>
		);
	}

	render() {
		return (
			<div styleName="wrap">
				<div styleName="field">
					<Icon type="searchIllust"/>
					<input
						styleName="input"
						type="text"
						autoFocus
						value={this.state.value}
						onChange={this.handleChange}
						onKeyDown={this.handleSubmit}
						/>
				</div>
				{this.renderList()}
			</div>
		);
	}
}
