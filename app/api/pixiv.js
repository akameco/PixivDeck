// @flow
import {normalize} from 'normalizr'
import PixivAppApi from 'pixiv-app-api'
import schema from './schema'

const pixiv = new PixivAppApi()

export const normalizeIllusts = (res: Object) =>
	normalize(res.illusts, schema.ILLUSTS)

export default pixiv
