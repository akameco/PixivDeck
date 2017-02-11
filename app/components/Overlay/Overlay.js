// @flow
import React from 'react'
import AutoLockScroll from 'components/AutoLockScroll'
import StyledOverlay from './StyledOverlay'

type Props = {
	show: bool,
	autoLockScrolling: bool,
	style: Object
}

type DefaultProps = {
	autoLockScrolling: bool,
}

class Overlay extends React.Component<DefaultProps, Props, void> {
	static defaultProps = {autoLockScrolling: true}

	render() {
		const {
			autoLockScrolling,
			show,
			...other
		} = this.props

		return (
			<StyledOverlay show={show} {...other}>
				{autoLockScrolling && <AutoLockScroll lock={show}/>}
			</StyledOverlay>
		)
	}
}

export default Overlay
