// @flow
import * as React from 'react'
import MainView from 'components/MainView'
import Table from 'containers/Table'
import DrawerManager from 'containers/DrawerManager'
import ModalManeger from 'containers/ModalManeger'
import Header from '../HeaderContainer'
import PreviewFactory from 'containers/PreviewFactory'

const App = () => (
  <div>
    <Header />
    <MainView>
      <Table />
    </MainView>
    <PreviewFactory />
    <DrawerManager />
    <ModalManeger />
  </div>
)

export default App
