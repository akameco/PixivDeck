// @flow
import url from 'url'
import camelizeKeys from 'camelcase-keys'

// eslint-disable-next-line
export const parseUrl = (nextUrl: string) =>
  camelizeKeys(url.parse(nextUrl, true).query)
