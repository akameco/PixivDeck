// @flow
import React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import ColumnManager from '../ColumnManager'
import type { TableIds } from './reducer'
import typeof { setTable } from './actions'

export type Props = {
  ids: TableIds,
  setTabel: setTable,
}

const Table = ({ ids, setTabel }: Props) => {
  const handleOnResize = () => null

  if (ids.length === 0) {
    return null
  }

  const handleOrderChange = (_, panes) => {
    const newState = panes.map(v => v.id)
    setTabel(newState)
  }

  const panes = ids.map(id =>
    <Pane
      key={id}
      width={280}
      id={id}
      height="100%"
      isResizable={{ x: true, y: false, xy: false }}
    >
      <ColumnManager id={id} />
    </Pane>
  )

  return (
    <SortablePane
      disableEffect
      onResize={handleOnResize}
      onOrderChange={handleOrderChange}
    >
      {panes}
    </SortablePane>
  )
}

export default Table
