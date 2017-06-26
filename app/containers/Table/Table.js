// @flow
import React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import Column from 'containers/ColumnContainer'

export type Props = {
  ids: Array<number>,
}

const Table = ({ ids }: Props) => {
  const handleOnResize = () => null

  const panes = ids.map(id =>
    <Pane
      key={id}
      width={300}
      id={id}
      height="100%"
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Column id={id} />
    </Pane>
  )

  return (
    <SortablePane disableEffect onResize={handleOnResize}>
      {panes}
    </SortablePane>
  )
}

export default Table
