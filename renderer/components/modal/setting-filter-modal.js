// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './setting-filter-modal.css';

type Props = {
	onSubmit: (tag: string) => void,
	tags: Array<string>
};

type State = {
	value: string
};

@CSSModules(styles)
export default class SettingFilterModal extends Component {
	props: Props;
	state: {
		value: string
	}

	constructor(props: Props) {
		super(props);
		this.state = {value: ''};
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		if (nextProps.tags.length !== this.props.tags.length) {
			return true;
		}
		if (this.state.value !== nextState.value) {
			return true;
		}
		return false;
	}

	handleCangeInput = (event: any) => {
		this.setState({value: event.target.value});
	}

	handleSubmit = (event: SyntheticKeyboardEvent) => { // eslint-disable-line no-undef
		if (event.key === 'Enter' && this.state.value !== '') {
			event.preventDefault();
			this.props.onSubmit(this.state.value);
			this.setState({value: ''});
		}
	}

	render() {
		const tags = this.props.tags.map(tag => {
			return (
				<li key={tag}>{tag}</li>
			);
		});

		return (
			<div styleName="base">
				フィルター
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleCangeInput}
					onKeyDown={this.handleSubmit}
					/>
				<ul>
					{tags}
				</ul>
			</div>
		);
	}
}
