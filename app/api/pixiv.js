// @flow
import url from 'url'
import {normalize} from 'normalizr'
import camelizeKeys from 'camelcase-keys'
import PixivAppApi from 'pixiv-app-api'
import schema from './schema'

const pixiv = new PixivAppApi()

export const normalizeIllusts = (res: Object) =>
	normalize(res.illusts, schema.ILLUSTS)

export const parseUrl = (nextUrl: string) =>
	camelizeKeys(url.parse(nextUrl, true).query)

export default pixiv
