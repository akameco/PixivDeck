// @flow
import React from 'react';
import Popover, {Item} from './Popover';

type Props = {
  value: string,
  keywords: string[],
  onClick: (word: string) => void,
};

const PopoverAuto = ({value, keywords, onClick}: Props) => {
  const list = keywords.map(keyword => {
    const handleClick = () => onClick(keyword);
    const start = keyword.slice(0, value.length);
    const end = keyword.slice(value.length);
    return <Item key={keyword} onClick={handleClick} start={start} end={end} />;
  });
  return (
    <Popover title="検索">
      {list}
    </Popover>
  );
};

export default PopoverAuto;
