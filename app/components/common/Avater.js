// @flow
import React from 'react'

type Props = {
	size: number,
	src: string,
	style?: Object,
	className?: string,
	color?: string,
}

const getStyles = ({color, size}: $Shape<Props>): Object => {
	const styles = {
		root: {
			userSelect: 'none',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: size / 2,
			borderRadius: '5px',
			height: size,
			width: size,
			color: color || '#fff',
		},
	}
	return styles
}

const Avater = ({src, style, className, ...others}: Props) => (
	<img
		src={src}
		style={Object.assign(getStyles(others).root, style)}
		className={className}
		/>
)

export default Avater
