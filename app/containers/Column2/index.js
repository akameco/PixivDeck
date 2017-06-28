// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectColumn } from './selectors'
import type { Column } from './reducer'

type Props = {
  column: Column,
}

function Column2(props: Props) {
  console.log(props.column)
  return <noscript />
}

const mapStateToProps = createStructuredSelector({
  column: makeSelectColumn(),
})

type OP = {
  id: string,
}

const connector: Connector<OP, Props> = connect(mapStateToProps)
export default connector(Column2)
