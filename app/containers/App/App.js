// @flow
import React from 'react'
import type { ColumnType } from 'types/column'
import Columns from 'components/Columns'
import DrawerManager from 'containers/DrawerManager'
import ModalManeger from 'containers/ModalManeger'
import Header from 'containers/HeaderContainer'
import PreviewManager from 'containers/PreviewManager'

export type Props = {
  columns: Array<ColumnType>,
}

const App = ({ columns }: Props) =>
  <div>
    <Header />
    <Columns columns={columns} />
    <PreviewManager />
    <DrawerManager />
    <ModalManeger />
  </div>

export default App
