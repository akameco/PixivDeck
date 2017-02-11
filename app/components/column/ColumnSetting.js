// @flow
import React from 'react'
import debounce from 'lodash.debounce'
import Slider from 'material-ui/Slider'
import styles from './ColumnSetting.css'

type Props = {
	setColumnMinBookmarks: (value: number) => void,
	minBookmarks: number;
	open: bool;
}

type State = {
	minBookmarks: number;
}

class ColumnSetting extends React.Component {
	props: Props

	state: State = {
		minBookmarks: 0,
	}

	componentWillMount() {
		this.setState({minBookmarks: this.props.minBookmarks})
	}

	handleSlider = (event: Event, value: number) => {
		this.setState({minBookmarks: value})
		this._sendBookmark()
	}

	_sendBookmark = debounce(() => {
		this.props.setColumnMinBookmarks(this.state.minBookmarks)
	}, 400)

	handleMove = (e: Event) => {
		e.stopPropagation()
	}

	render() {
		const {open} = this.props
		const {
			minBookmarks,
		} = this.state

		const popovarStyle = open ? styles.popovar : styles.popovarRetracted

		return (
			<div
				className={popovarStyle}
				onMouseDown={this.handleMove}
				onTouchStart={this.handleMove}
				>
				<div className={styles.wrap}>
					ブックマークフィルタ {minBookmarks}
					<Slider
						min={0}
						max={1000}
						step={10}
						defaultValue={minBookmarks}
						value={minBookmarks}
						onChange={this.handleSlider}
						/>
				</div>
			</div>
		)
	}
}

export default ColumnSetting
