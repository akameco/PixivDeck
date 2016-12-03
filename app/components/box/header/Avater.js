// @flow
import React from 'react'
import styles from './Avater.css'

type Props = {
	img: string
};

const Avater = ({img}: Props) => (
	<div className={styles.avater}>
		<img src={img}/>
	</div>
)

export default Avater
