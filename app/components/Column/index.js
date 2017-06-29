// @flow
import React from 'react'
import styled from 'styled-components'
import scrollTop from 'residual-scroll-top'
// import type { ColumnType } from 'types/column'
import ColumnRoot from 'components/ColumnRoot'
import ColumnHeader from 'components/ColumnHeader'
// import ColumnSetting from 'containers/ColumnHeaderSetting'

type Props = {
  children?: React$Element<*>,
  title: string,
  onClose: () => void,
  node: HTMLElement,
}

const View = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 50px);
`

export default function Column({ title, onClose, children, node }: Props) {
  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  const handleHeaderClick = (e: Event) => {
    e.preventDefault()
    if (node && node.scrollTop === 0) {
      return
    }
    if (node) {
      scrollTop(node, () => {
        // TOOD: Callback
        // props.checkColumnUpdate()
      })
    }
  }

  return (
    <ColumnRoot>
      <ColumnHeader
        name={title}
        onClose={onClose}
        onTopClick={handleHeaderClick}
      >
        {/* <ColumnSetting id={id} minBookmarks={minBookmarks} /> */}
        <div style={{ height: '200px' }}>hello world</div>
      </ColumnHeader>

      <View onMouseDown={handleMove} onTouchStart={handleMove}>
        {children}
      </View>
    </ColumnRoot>
  )
}
