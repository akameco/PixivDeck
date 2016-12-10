// @flow
import React from 'react'
import {link} from 'autolinker'
import styles from './Caption.css'

type Props = {
	caption: string,
};

const Caption = ({caption}: Props) => (
	<div className={styles.Caption}>
		<span
			dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
				__html: link(caption),
			}}
			/>
	</div>
)

export default Caption
