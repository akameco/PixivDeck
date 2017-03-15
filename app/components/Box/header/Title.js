// @flow
import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
	color: #e1e8ed;
	width: calc(100% - 20px);
	padding: 5px 0 2px 5px;
	font-size: 1rem;
	margin: 0;
`;
const Title = ({title}: {title: string}) => (
  <TitleWrapper>
    {title}
  </TitleWrapper>
);

export default Title;
