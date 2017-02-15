import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'

import Avater from '../'

const renderComponent = (props = {}) => shallow(
	<Avater {...props}/>
)

test('snapshot', () => {
	const c = renderComponent()
	expect(shallowToJson(c)).toMatchSnapshot()
})
