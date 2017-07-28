// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import BookmarkButton from '../BookmarkButton'

const onClick = jest.fn()

const setup = props => {
  return {
    onClick,
    isBookmarked: false,
    addBookmark: jest.fn(),
    deleteBookmark: jest.fn(),
    ...props,
  }
}

test('snapshot BookmarkButton isBookmarked=true', () => {
  const comp = shallow(<BookmarkButton {...setup({ isBookmarked: true })} />)
  expect(toJSON(comp)).toMatchSnapshot()
})

test('snapshot BookmarkButton isBookmarked=false', () => {
  const comp = shallow(<BookmarkButton {...setup({ isBookmarked: false })} />)
  expect(toJSON(comp)).toMatchSnapshot()
})
