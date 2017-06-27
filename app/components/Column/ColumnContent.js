// @flow
import React, { type Component } from 'react'
import styled from 'styled-components'
import Box from 'containers/BoxContainer'
import Infinite from 'components/common/Infinite'
import type { Illust } from 'types/illust'

type Props = {
  root: any,
  targetRef?: (c: Component<*, *, *>) => void,
  onIntersect: () => void,
  illusts: Array<Illust>,
}

const ColumnContent = ({ root, onIntersect, illusts, targetRef }: Props) => {
  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  const List = illusts.map(illust => <Box key={illust.id} illust={illust} />)

  return (
    <View onMouseDown={handleMove} onTouchStart={handleMove}>
      <Infinite root={root} onIntersect={onIntersect} targetRef={targetRef}>
        {List}
      </Infinite>
    </View>
  )
}

const View = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 50px);
`

export default ColumnContent
