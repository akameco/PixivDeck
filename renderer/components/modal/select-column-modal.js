import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './select-column-modal.css';

type Props = {
	onSelect: (query: {type: string, opts: Object}, title: string) => void
};

class Link extends Component {
	props: {
		onSelect: (mode: string) => void,
		mode: string
	};

	render() {
		return (
			<li >
				<a onClick={() => this.props.onSelect(this.props.mode)}>
					{`ranking/${this.props.mode}`}
				</a>
			</li>
		);
	}
}

class SelectColumnModal extends Component {
	props: Props;

	handleAddRanking = (mode: string) => {
		this.props.onSelect({type: 'ranking', opts: {mode, page: 1}}, `ranking/${mode}`);
	};

	render() {
		const links = ['daily', 'weekly', 'monthly'].map(v =>
			<Link
				mode={v}
				key={v}
				onSelect={this.handleAddRanking}
				/>
		);

		return (
			<ul styleName="list">
				{links}
			</ul>
		);
	}
}

export default cssModules(SelectColumnModal, styles);
