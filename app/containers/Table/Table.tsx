import * as React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import ColumnManager from '../ColumnManager'
import { TableIds } from './reducer'
import { setTable } from './actions'

export interface Props {
  ids: TableIds
  setTabel: typeof setTable
}

const Table = ({ ids, setTabel }: Props) => {
  const handleOnResize = () => null

  if (ids.length === 0) {
    return null
  }

  const panes = ids.map(key => (
    <Pane
      key={key}
      size={{
        width: 280,
        height: '100%',
      }}
      style={{
        zIndex: 1,
      }}
      resizable={{
        x: true,
        y: false,
        xy: false,
      }}
    >
      <ColumnManager id={key} />
    </Pane>
  ))
  return (
    <SortablePane
      order={ids}
      disableEffect
      onResize={handleOnResize}
      onOrderChange={order => {
        setTabel(order)
      }}
    >
      {panes}
    </SortablePane>
  )
}

export default Table
