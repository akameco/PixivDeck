import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Loading from '../';

const renderComponent = (props = {}) => shallow(<Loading {...props} />);

test('snapshot', () => {
  const c = renderComponent();
  expect(shallowToJson(c)).toMatchSnapshot();
});
