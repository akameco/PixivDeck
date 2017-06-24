// @flow
import React from 'react'

import type { Manage } from 'types/manage'
import type { ColumnType } from 'types/column'

import ModalManeger from '../ModalManeger'

import Header from 'components/Header'
import Columns from 'components/Columns'
import Drawer from 'components/Drawer'
import UserDrawer from 'components/UserDrawer'

import Preview from './Preview'

type Props = {
  columns: Array<ColumnType>,
  manage: Manage,
  onClose: () => void,
}

const App = ({ columns, manage, onClose }: Props) =>
  <div>
    <Header />
    <Columns columns={columns} />
    <Preview {...manage} />
    <Drawer open={manage.isDrawer} onRequestClose={onClose} width={600}>
      <UserDrawer />
    </Drawer>
    <ModalManeger />
  </div>

export default App
