// @flow
import {normalize} from 'normalizr'
import PixivAppApi from 'pixiv-app-api'
import schemas from '../schemas'

const pixiv = new PixivAppApi()

export const normalizeIllusts = (res: Object) =>
	normalize(res.illusts, schemas.ILLUSTS)

export default pixiv
