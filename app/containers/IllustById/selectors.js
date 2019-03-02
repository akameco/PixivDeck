// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: number,
}

export const getIllustById = (state: State) => state.IllustById

export const getSelectIllust = (state: State, { id }: Props) =>
  state.IllustById[id]

export const makeSelectIllust = () =>
  createSelector(
    getSelectIllust,
    s => s
  )

export const makeSelectIllustTags = () =>
  createSelector(
    getSelectIllust,
    s => s.tags
  )

export const makeSelectIllustTagNames = () =>
  createSelector(
    makeSelectIllustTags(),
    s => s.map(t => t.name)
  )

// タグでフィルター
const getTags = (state: State) => state.SettingModal.tags

export const makeIllustFilterByTags = () =>
  createSelector(
    getTags,
    makeSelectIllust(),
    makeSelectIllustTagNames(),
    (tags, illust, names) => {
      if (names.every(name => tags.every(tag => name.includes(tag)))) {
        return illust
      }
      return null
    }
  )

export const makeIllustsFilterByTags = () =>
  createSelector(
    getIllustById,
    getTags,
    (obj, tags) => {
      const result = Object.keys(obj).reduce((acc, key) => {
        const illust = obj[key]
        const names = illust.tags.map(t => t.name)
        if (names.every(name => tags.every(tag => !name.includes(tag)))) {
          acc[key] = illust
        }
        return acc
      }, {})
      return result
    }
  )
