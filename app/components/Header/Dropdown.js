// @flow
import React from 'react';
import styled, {keyframes} from 'styled-components';
import {FormattedMessage} from 'react-intl';
import Item from './Item';
import messages from './messages';

const fadeIn = keyframes`
	0% {
		bottom: -150px;
	}

	100% {
		bottom: 10px;
	}
`;

const Wrap = styled.div`
	position: absolute;
	background-color: white;
	bottom: 10px;
	left: 50px;
	width: 150px;
	padding: 12px 0;
	animation: ${fadeIn} 400ms both;
`;

const H = styled.div`
	padding-top: 1px;
	border-bottom: 1px solid #ddd;
	margin: 5px 0;
	text-overflow: ellipsis;
`;

type Props = {
  onOpenFilterModal: () => void,
  onLogout: () => void,
};

const Dropdwon = ({onOpenFilterModal, onLogout}: Props) => (
  <Wrap>
    <Item
      onClick={onOpenFilterModal}
      text={<FormattedMessage {...messages.setting} />}
    />
    <H />
    <Item onClick={onLogout} text={<FormattedMessage {...messages.logout} />} />
  </Wrap>
);

export default Dropdwon;
