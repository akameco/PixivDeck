// @flow
import * as React from 'react'
import LoadingWrapper from './LoadingWrapper'
import Spinner from './Spinner'
import Rect from './Rect'

type Props = {
  wrapStyle?: Object,
  style?: Object,
}

function Loading({ style, wrapStyle }: Props) {
  return (
    <LoadingWrapper style={wrapStyle}>
      <Spinner style={style}>
        <Rect delay={0} />
        <Rect delay={-1.1} />
        <Rect delay={-1} />
        <Rect delay={-0.9} />
        <Rect delay={-0.8} />
      </Spinner>
    </LoadingWrapper>
  )
}

export default Loading
