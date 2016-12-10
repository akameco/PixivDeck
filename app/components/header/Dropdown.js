// @flow
import React from 'react'
import styles from './dropdown.css'

type Props = {
	onOpenFilterModal: () => void,
	onLogout: () => void
};

const Dropdwon = ({onOpenFilterModal, onLogout}: Props) => (
	<div className={styles.dropdown}>
		<Item
			onClick={onOpenFilterModal}
			text="設定"
			/>
		<div className={styles.h}/>
		<Item
			onClick={onLogout}
			text="ログアウト"
			/>
	</div>
)

type ItemProps = {
	text: string;
	onClick: () => void;
};

const Item = ({text, onClick}: ItemProps) => (
	<div className={styles.item} onClick={onClick}>
		{text}
	</div>
)

export default Dropdwon
