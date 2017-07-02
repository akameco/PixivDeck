// @flow
import React from 'react'
import styled from 'styled-components'
import Loading from 'components/Loading'

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  background: #4a4a4a;
  height: 100%;
`

const ColumnLoading = () =>
  <LoadingWrap>
    <Loading wrapStyle={{ background: '#121212' }} />
  </LoadingWrap>

export default ColumnLoading
