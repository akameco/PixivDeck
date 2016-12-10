// @flow
import React from 'react'
import debounce from 'lodash.debounce'
import Slider from 'material-ui/Slider'
import styles from './ColumnSetting.css'

type Props = {
	setColumnMinBookmarks: (value: number) => void,
	open: bool;
};

type State = {
	slider: number;
};

class ColumnSetting extends React.Component {
	props: Props
	state: State = {
		slider: 0,
	}

	handleSlider = (event: Event, value: number) => {
		this.setState({slider: value})
		this._sendBookmark()
	}

	_sendBookmark = debounce(() => {
		this.props.setColumnMinBookmarks(this.state.slider)
	}, 400)

	handleMove = (e: Event) => {
		e.stopPropagation()
	}

	render() {
		const {open} = this.props
		const popovarStyle = open ? styles.popovar : styles.popovarRetracted
		return (
			<div
				className={popovarStyle}
				onMouseDown={this.handleMove}
				onTouchStart={this.handleMove}
				>
				<div className={styles.wrap}>
					ブックマークフィルタ {this.state.slider}
					<Slider
						min={0}
						max={1000}
						step={10}
						defaultValue={0}
						value={this.state.slider}
						onChange={this.handleSlider}
						/>
				</div>
			</div>
		)
	}
}

export default ColumnSetting
