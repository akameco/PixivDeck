import React from 'react';
import styled from 'styled-components';
import HeaderButton from './HeaderButton';

type Props = {
  onClickAdd: () => void,
  onOpenSearchModal: () => void,
};

const Wrap = styled.div`
	width: 100%;
	text-align: center;
`;

const HeaderTop = ({onClickAdd, onOpenSearchModal}: Props) => (
  <Wrap>
    <HeaderButton iconType="add" onClick={onClickAdd} />
    <HeaderButton iconType="searchIllust" onClick={onOpenSearchModal} />
  </Wrap>
);

export default HeaderTop;
