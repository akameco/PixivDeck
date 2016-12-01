// @flow
import url from 'url'
import {normalize} from 'normalizr'
import camelizeKeys from 'camelcase-keys'
import PixivAppApi from 'pixiv-app-api'
import schemas from '../schemas'

const pixiv = new PixivAppApi()

export const normalizeIllusts = (res: Object) =>
	normalize(res.illusts, schemas.ILLUSTS)

export const parseUrl = (nextUrl: string) =>
	camelizeKeys(url.parse(nextUrl, true).query)

export default pixiv
