// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import throttle from 'lodash.throttle'
import Pixiv from '../../util/pixiv'
import PopoverAuto from './PopoverAuto'
import UsersOver from './UsersOver'
import styles from './SearchField.css'

export type Props = {
	onClose: () => void,
	onSubmit: (tag: string) => void
};

type State = {
	value: string,
	keywords: string[],
};

class SearchField extends Component {
	props: Props;
	state: State = {value: '', keywords: []};

	componentDidMount() {
		window.addEventListener('click', this._handleClose)
	}

	componentWillUnmount() {
		window.removeEventListener('click', this._handleClose)
	}

	handleChange = ({target}: Event) => {
		if (target instanceof HTMLInputElement) {
			this.setState({value: target.value})
			this._autoComplte()
		}
	}

	_handleClose = (event: any) => {
		event.preventDefault()
		let node = event.target
		while (node) {
			if (node === findDOMNode(this)) {
				return
			}
			node = node.parentNode
		}
		this.props.onClose()
	}

	_autoComplte = throttle(async () => {
		const {value} = this.state
		if (value === '') {
			return
		}
		const {searchAutoCompleteKeywords} = await Pixiv.searchAutoComplete(value)
		this.setState({keywords: searchAutoCompleteKeywords})
	}, 200)

	handleSubmit = (event: SyntheticKeyboardEvent) => { // eslint-disable-line no-undef
		const text = this.state.value.trim()
		if (event.which === 13 && text !== '') {
			this.props.onSubmit(text)
			this.setState({value: ''})
		}
	}

	handleClick = (keyword: string) => {
		if (keyword !== '') {
			this.props.onSubmit(keyword)
		}
	}

	render() {
		const {keywords, value} = this.state
		return (
			<div className={styles.wrap}>
				<div className={styles.field}>
					<input
						className={styles.input}
						type="text"
						placeholder="キーワード検索"
						autoFocus
						value={value}
						onChange={this.handleChange}
						onKeyDown={this.handleSubmit}
						/>
				</div>
				{value &&
					<div className={styles.popup}>
						{keywords.length > 0 &&
							<PopoverAuto
								value={value}
								keywords={keywords}
								onClick={this.handleClick}
								/>
						}
						<UsersOver value={value} onClick={this.handleClick}/>
					</div>
				}
			</div>
		)
	}
}

export default SearchField
