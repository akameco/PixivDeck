// @flow
import React, {Component} from 'react'
import css from 'react-css-modules'
import Icon from '../../icon'
import Tag from '../tag'
import Checkbox from '../../common/Checkbox'
import styles from './setting-modal.css'

type Props = {
	onDelete: (tag: string) => void,
	onSubmit: (tag: string) => void,
	tags: Array<string>,
	isIllustComment: bool,
};

type State = {
	value: string
};

@css(styles)
export default class SettingFilterModal extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props)
		this.state = {value: ''}
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		if (nextProps.tags.length !== this.props.tags.length) {
			return true
		}
		if (this.state.value !== nextState.value) {
			return true
		}
		return false
	}

	handleCangeInput = (event: SyntheticEvent) => { // eslint-disable-line no-undef
		const target = event.target
		if (target instanceof HTMLInputElement) {
			this.setState({value: target.value})
		}
	}

	handleSubmit = (event: SyntheticKeyboardEvent) => { // eslint-disable-line no-undef
		if (event.keyCode === 13 && this.state.value !== '') {
			event.preventDefault()
			this.props.onSubmit(this.state.value)
			this.setState({value: ''})
		}
	}

	handleCheckShowText = () => {

	}

	render() {
		const tags = this.props.tags.map((tag: string) =>
			<Tag key={tag} tag={tag} onClick={this.props.onDelete}/>
		)

		return (
			<div styleName="wrap">
				<div>
					<a href="http://www.pixiv.net/setting_user.php" target="_brank">閲覧制限を設定する(pixivを開く)</a>
				</div>
				<div>
					<Checkbox
						id="box-text"
						onChange={this.handleCheckShowText}
						value={this.props.isIllustComment}
						text="show illust message"
						/>
				</div>
				<div styleName="tagFilter">
					<h4>タグフィルター</h4>
					<div styleName="field">
						<Icon type="visible-off"/>
						<input
							type="text"
							styleName="input"
							value={this.state.value}
							onChange={this.handleCangeInput}
							onKeyDown={this.handleSubmit}
							/>
					</div>
					<ul>
						{tags}
					</ul>
				</div>
			</div>
		)
	}
}
