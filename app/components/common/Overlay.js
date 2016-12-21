// @flow
import React from 'react'
import AutoLockScrolling from 'material-ui/internal/AutoLockScrolling'

type Props = {
	show: bool,
	autoLockScrolling: bool,
	style: Object
};

type StyleType = {
	root: Object;
};

function getStyles({show}: Props): StyleType {
	const style = {
		root: {
			position: 'fixed',
			height: '100%',
			width: '100%',
			top: 0,
			left: '-100%',
			opacity: 0,
			zIndex: 0,
			backgroundColor: 'rgba(41, 47, 51, 0.9)',
			WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
			transform: 'translateZ(0)',
			transition: 'left 400ms ease-out 0, opacity 400ms ease-out',
		},
	}

	if (show) {
		const showStyle = {
			left: 0,
			opacity: 1,
			transition: 'left 0ms ease-out, opacity 200ms ease-out',
		}
		return {root: {...style.root, ...showStyle}}
	}

	return style
}

type DefaultProps = {
	autoLockScrolling: bool,
	style: Object,
};

class Overlay extends React.Component<DefaultProps, Props, void> {
	static defaultProps = {
		autoLockScrolling: true,
		style: {},
	}

	render() {
		const {
			autoLockScrolling,
			show,
			style,
			...other
		} = this.props

		const styles = getStyles(this.props)

		return (
			<div {...other} style={{...styles.root, ...style}}>
				{autoLockScrolling && <AutoLockScrolling lock={show}/>}
			</div>
		)
	}
}

export default Overlay
