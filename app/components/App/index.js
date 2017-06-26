// @flow
import React from 'react'
import MainView from 'components/MainView'
import Table from 'containers/Table'
import DrawerManager from 'containers/DrawerManager'
import ModalManeger from 'containers/ModalManeger'
import Header from 'containers/HeaderContainer'
import PreviewManager from 'containers/PreviewManager'

const App = () =>
  <div>
    <Header />
    <MainView>
      <Table />
    </MainView>
    <PreviewManager />
    <DrawerManager />
    <ModalManeger />
  </div>

export default App
