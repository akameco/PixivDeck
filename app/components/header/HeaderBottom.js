import React from 'react'
import Dropdwon from './Dropdown'
import HeaderButton from './HeaderButton'
import styles from './HeaderBottom.css'

type Props = {
	onToggleDropdown: () => void,
	onOpenFilterModal: () => void,
	onLogout: () => void,
	isDropdown: bool,
};

const HeaderBottom = ({onLogout, onToggleDropdown, onOpenFilterModal, isDropdown}: Props) => (
	<div className={styles.bottom}>
		<HeaderButton iconType="setting" onClick={onToggleDropdown}/>
		{isDropdown &&
			<Dropdwon
				onLogout={onLogout}
				onOpenFilterModal={onOpenFilterModal}
				/>
		}
	</div>
)

export default HeaderBottom
