// @flow
import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import Icon from '../../common/Icon'
import Checkbox from '../../common/Checkbox'
import styles from './SettingModal.css'

type Props = {
	onDelete: (tag: string) => void,
	onSubmit: (tag: string) => void,
	onCheckShowText: (isShow: bool) => void,
	onCheckIllustOnly: (isShow: bool) => void,
	tags: Array<string>,
	isIllustComment: bool,
	isIllustOnly: bool,
};

type State = {
	value: string
};

export default class SettingFilterModal extends Component {
	props: Props;
	state: State = {value: ''}

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
		this.props.onCheckShowText(!(this.props.isIllustComment))
	}

	handleCheckSetOnlyIllust = () => {
		this.props.onCheckIllustOnly(!(this.props.isIllustOnly))
	}

	renderChip(tag: string) {
		const handleClick = () => this.props.onDelete(tag)
		const style = {margin: 4}
		return (
			<Chip
				key={tag}
				onRequestDelete={handleClick}
				style={style}
				>
				{tag}
			</Chip>
		)
	}

	render() {
		return (
			<div className={styles.wrap}>
				<div>
					<Checkbox
						id="box-text"
						onChange={this.handleCheckShowText}
						defaultChecked={this.props.isIllustComment}
						value={this.props.isIllustComment}
						text="キャプションを表示"
						/>
				</div>
				<div>
					<Checkbox
						id="BoxIllustOnly"
						onChange={this.handleCheckSetOnlyIllust}
						defaultChecked={this.props.isIllustOnly}
						value={this.props.isIllustOnly}
						text="画像のみ表示"
						/>
				</div>
				<div>
					<a href="http://www.pixiv.net/setting_user.php" target="_brank">閲覧制限を設定する(pixivを開く)</a>
				</div>
				<div className={styles.tagFilter}>
					<h4>タグフィルター</h4>
					<div className={styles.field}>
						<Icon type="visible-off"/>
						<input
							type="text"
							className={styles.input}
							value={this.state.value}
							onChange={this.handleCangeInput}
							onKeyDown={this.handleSubmit}
							/>
					</div>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						{this.props.tags.map(this.renderChip, this)}
					</div>
				</div>
			</div>
		)
	}
}
