// @flow
import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import Icon from '../../common/Icon'
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
		const {isIllustComment, isIllustOnly} = this.props
		return (
			<div className={styles.wrap}>
				<div className={styles.card}>
					<List>
						<Subheader>
							UI 設定
						</Subheader>
						<ListItem
							primaryText="キャプションを表示"
							rightToggle={
								<Toggle
									onToggle={this.handleCheckShowText}
									toggled={isIllustComment}
									/>
							}
							/>
						<ListItem
							primaryText="画像のみ表示"
							rightToggle={
								<Toggle
									onToggle={this.handleCheckSetOnlyIllust}
									toggled={isIllustOnly}
									/>
							}
							/>
					</List>
				</div>
				<div className={styles.card}>
					<div className={styles.tagFilter}>
						<Subheader>タグフィルター</Subheader>
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
				<div className={styles.card}>
					<Subheader>閲覧制限</Subheader>
					<div className={styles.discription}>
						R-18タグをフィルターするのがもっとも簡単です。
						どうしても閲覧制限を設定はpixivのサイト上にて変更する必要があります。
						<br/>
						<a
							href="http://www.pixiv.net/setting_user.php"
							target="_brank"
							className={styles.OpenLink}
							>
							pixiv - R-18設定
						</a>
					</div>
				</div>
			</div>
		)
	}
}
