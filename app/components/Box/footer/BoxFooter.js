// @flow
import React from 'react'
import union from 'lodash.union'
import styled from 'styled-components'
import Tag from './Tag'

const FooterWrapper = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	padding: 0 0.5rem;
	font-size: 0.8rem;
`

type Props = {
  onClickTag: (tag: string) => void,
  tags: Array<string>,
}

export default class BoxFooter extends React.PureComponent {
  props: Props

  render() {
    const Tags = union(this.props.tags).map(item => (
      <Tag key={item} name={item} onClick={this.props.onClickTag} />
    ))
    return (
      <FooterWrapper>
        {Tags}
      </FooterWrapper>
    )
  }
}
