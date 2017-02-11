// @flow
import React from 'react'

import type {Manage} from 'types/manage'
import type {ColumnType} from 'types/column'

import Modal from 'components/modal'
import Header from 'components/header'
import Columns from 'components/columns'
import Drawer from 'components/drawer'
import UserDrawer from 'components/UserDrawer'

import Preview from './Preview'

type Props = {
	columns: Array<ColumnType>,
	manage: Manage,
	onClose: () => void,
}

const App = ({
	columns,
	manage,
	onClose,
}: Props) => (
	<div>
		<Header/>
		<Columns columns={columns}/>
		<Preview {...manage}/>
		<Drawer
			open={manage.isDrawer}
			onRequestClose={onClose}
			width={600}
			>
			<UserDrawer/>
		</Drawer>
		<Modal/>
	</div>
)

export default App
