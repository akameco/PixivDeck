// @flow
import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import Slider from 'material-ui/Slider'

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

		return (
			<Popover open={open} onMouseDown={this.handleMove} onTouchStart={this.handleMove}>
				<Wrap>
					ブックマークフィルタ {minBookmarks}
					<Slider
						min={0}
						max={1000}
						step={10}
						defaultValue={minBookmarks}
						value={minBookmarks}
						onChange={this.handleSlider}
						/>
				</Wrap>
			</Popover>
		)
	}
}

const Popover = styled.div`
	display: flex;
	overflow: auto;
	margin: 0;
	padding: 0 10px;
	max-height: ${props => props.open ? '400px' : 0};
	transition: ${props => props.open ? 'max-height, 0.6s, 0ms, ease-out' : 'max-height, 0.4s, 0ms, ease-in'};
`

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	color: #eee;
	width: 100%;
`

export default ColumnSetting
