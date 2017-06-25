// @flow
import React from 'react'

import type { Manage } from 'types/manage'
import type { ColumnType } from 'types/column'

import Columns from 'components/Columns'
import Drawer from 'components/Drawer'
import UserDrawer from 'components/UserDrawer'

import ModalManeger from '../ModalManeger'
import Header from '../HeaderContainer'

import PreviewManager from '../PreviewManager'

type Props = {
  columns: Array<ColumnType>,
  manage: Manage,
  onClose: () => void,
}

const App = ({ columns, manage, onClose }: Props) =>
  <div>
    <Header />
    <Columns columns={columns} />
    <PreviewManager />
    <Drawer open={manage.isDrawer} onRequestClose={onClose} width={600}>
      <UserDrawer />
    </Drawer>
    <ModalManeger />
  </div>

export default App
