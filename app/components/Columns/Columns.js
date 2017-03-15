// @flow
import React from 'react';
import styled from 'styled-components';
import {SortablePane, Pane} from 'react-sortable-pane';
import type {ColumnType} from 'types/column';
import * as colors from 'constants/colors';
import Column from 'components/Column';

type Props = {
  columns: Array<ColumnType>,
};

const Columns = ({columns}: Props) => {
  const handleOnResize = () => null;
  const panes = columns.map(column => (
    <Pane
      key={column.id}
      width={300}
      id={column.id}
      height="100%"
      isResizable={{x: false, y: false, xy: false}}>
      <Column id={column.id} />
    </Pane>
  ));
  return (
    <Wrap>
      <SortablePane disableEffect onResize={handleOnResize}>
        {panes}
      </SortablePane>
    </Wrap>
  );
};

const Wrap = styled.div`
	position: absolute;
	left: 50px;
	width: calc(100% - 50px);
	height: 100%;
	overflow-y: hidden;
	background-color: ${colors.background};
`;

export default Columns;
