// @flow
import React, {Component} from 'react'
import throttle from 'lodash.throttle'
import Pixiv from '../../../util/pixiv'
import Icon from '../../common/Icon'
import PopoverAuto from './PopoverAuto'
import UsersOver from './UsersOver'
import styles from './SearchModal.css'

type Props = {
	onSubmit: (tag: string) => void
};

type State = {
	value: string,
	keywords: string[],
};

class SearchModal extends Component {
	props: Props;
	state: State = {value: '', keywords: []};

	handleChange = async (event: any) => {
		this.setState({value: event.target.value})
		this._autoComplte()
	}

	_autoComplte = throttle(async () => {
		if (this.state.value === '') {
			return
		}
		const {searchAutoCompleteKeywords} = await Pixiv.searchAutoComplete(this.state.value)
		this.setState({keywords: searchAutoCompleteKeywords})
	}, 500)

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
					<Icon type="searchIllust" className={styles.icon}/>
					<input
						className={styles.input}
						type="text"
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
								keywords={this.state.keywords}
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

export default SearchModal
