import React from 'react'
import HeaderButton from './HeaderButton'
import styles from './HeaderTop.css'

type Props = {
	onClickAdd: () => void,
	onOpenSearchModal: () => void,
}

const HeaderTop = ({onClickAdd, onOpenSearchModal}: Props) => (
	<div className={styles.top}>
		<HeaderButton iconType="add" onClick={onClickAdd}/>
		<HeaderButton iconType="searchIllust" onClick={onOpenSearchModal}/>
	</div>
)

export default HeaderTop
