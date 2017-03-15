// @flow
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
	border: 10px;
	display: block;
	cursor: pointer;
	margin: 0;
	padding: 0;
	text-decoration: none;
	position: relative;
	transform: translate(0, 0);
	color: rgba(0, 0, 0, 0.85);
	transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0;

	&:hover {
		background-color: rgba(0, 0, 0, 0.098);
	}
`;

const InnerButton = styled.div`
	padding: 10px 16px 10px 17px;
`;

type Props = {
  text: string,
  onClick: () => void,
};

const LinkButton = ({text, onClick}: Props) => (
  <Wrap onClick={onClick}>
    <InnerButton>
      {text}
    </InnerButton>
  </Wrap>
);

export default LinkButton;
