// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import BookmarkButton from '../BookmarkButton'

const onClick = jest.fn()

test('snapshot BookmarkButton isBookmarked=true', () => {
  const comp = shallow(<BookmarkButton isBookmarked onClick={onClick} />)
  expect(toJSON(comp)).toMatchSnapshot()
})

test('snapshot BookmarkButton isBookmarked=false', () => {
  const comp = shallow(
    <BookmarkButton isBookmarked={false} onClick={onClick} />
  )
  expect(toJSON(comp)).toMatchSnapshot()
})
