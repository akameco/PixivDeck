// @flow
import React from 'react'
import {link} from 'autolinker'
import styles from './Caption.css'

export default function Caption({caption}: {caption: string}) {
	return (
		<div className={styles.Caption}>
			<span
				dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
					__html: link(caption),
				}}
				/>
		</div>
	)
}
