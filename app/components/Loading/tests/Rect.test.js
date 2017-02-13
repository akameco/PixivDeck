import React from 'react'
import {shallow, mount} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'

import Rect from '../Rect'

test('render a prop', () => {
	const delay = -0.1
	const c = mount(<Rect delay={-0.1}/>)
	expect(c.prop('delay')).toEqual(delay)
})

test('snapshot', () => {
	const c = shallow(<Rect/>)
	expect(shallowToJson(c)).toMatchSnapshot()
})
