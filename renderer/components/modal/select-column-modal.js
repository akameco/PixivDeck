// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {rankingModes} from '../../contains';
import type {query} from '../../actions/column';
import styles from './select-column-modal.css';

class Link extends Component {
	props: {
		onSelect: (mode: string) => void,
		mode: string
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<li>
				<a onClick={() => this.props.onSelect(this.props.mode)}>
					{`ranking/${this.props.mode}`}
				</a>
			</li>
		);
	}
}

type Props = {
	onSelect: (query: query, title: string) => void
};

@CSSModules(styles)
export default class SelectColumnModal extends Component {
	props: Props;

	handleAddRanking = (mode: string) => {
		this.props.onSelect({type: 'ranking', opts: {mode, page: 1}}, `ranking/${mode}`);
	}

	handleAddFavorite = (publicity: 'private' | 'public') => {
		this.props.onSelect({type: 'favoriteWorks', opts: {publicity, page: 1}}, `favorite/${publicity}`);
	}

	render() {
		const rankingLinks = rankingModes.map(v =>
			<Link
				mode={v}
				key={v}
				onSelect={this.handleAddRanking}
				/>
		);

		return (
			<ul styleName="list">
				{rankingLinks}
				<li >
					<a onClick={() => this.handleAddFavorite('public')}>
						お気に入り
					</a>
				</li>
				<li >
					<a onClick={() => this.handleAddFavorite('private')}>
						お気に入り/非公開
					</a>
				</li>
			</ul>
		);
	}
}
