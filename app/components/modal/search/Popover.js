// @flow
import React from 'react'
import styles from './Popover.css'

type ItemProps = {
	start: string,
	end: string,
	onClick: () => void,
};

export const Item = ({start, end, onClick}: ItemProps) => (
	<div className={styles.item} onClick={onClick}>
		<u>{start}</u>{end}
	</div>
)

type Props = {
	title: string,
	children?: any,
};

const Popover = ({children, title}: Props) => {
	return (
		<div className={styles.wrap}>
			<div className={styles.result}>
				<div className={styles.title}>
					{title}
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Popover
