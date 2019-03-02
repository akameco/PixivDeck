// @flow
import { createSelector } from 'reselect'
import { makeSelectIllust } from '../IllustById/selectors'

export const makeIsBookmarked = () =>
  createSelector(
    makeSelectIllust(),
    s => s.isBookmarked
  )
