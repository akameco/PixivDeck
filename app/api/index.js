// @flow
import { normalize } from 'normalizr'
import PixivAppApi from 'pixiv-app-api'
import type { Endpoint, Params } from 'types/column'
import { parseUrl } from './util'

import schema from './schema'

const pixiv = new PixivAppApi()

export const normalizeIllusts = (res: Object) =>
  // $FlowFixMe
  normalize(res.illusts, schema.ILLUSTS)

type FetchResponse = {
  response: Object,
  params: ?Params,
  nextUrl: ?string,
}

class Api {
  static login(username: string, password: string) {
    return Promise.resolve().then(() => pixiv.login(username, password))
  }

  static authInfo() {
    return pixiv.authInfo()
  }
  static searchAutoComplete(value) {
    return pixiv.searchAutoComplete(value)
  }

  static async fetch(
    endpoint: Endpoint | string,
    opts: ?Params
  ): Promise<FetchResponse> {
    const res = await pixiv.fetch(endpoint, { params: opts })

    const nextParams: ?Params = res.nextUrl ? parseUrl(res.nextUrl) : null

    return {
      response: normalizeIllusts(res),
      params: nextParams,
      nextUrl: res.nextUrl,
    }
  }

  static async userFollowAdd(id: number) {
    const result = await pixiv.userFollowAdd(id)
    return result
  }

  static async userFollowDelete(id: number) {
    const r = await pixiv.userFollowDelete(id)
    return r
  }
  static async userIllusts(id: number, type) {
    const r = await pixiv.userIllusts(id, { type })
    return r
  }
  static async illustBookmarkAdd(
    id: number,
    isPublic: boolean = true
  ): Promise<Object> {
    const restrict = isPublic ? 'public' : 'private'
    const r = await pixiv.illustBookmarkAdd(id, { restrict })
    return r
  }
  static async userDetail(id: number) {
    const r = await pixiv.userDetail(id)
    return r
  }
}

export default Api
