// @flow
import type { Endpoint, Params } from 'types/column'
import Pixiv, { normalizeIllusts } from './pixiv'
import { parseUrl } from './util'

type FetchResponse = {
  response: Object,
  params: ?Params,
  nextUrl: ?string,
}

class Api {
  static login(username: string, password: string) {
    return Promise.resolve().then(() => Pixiv.login(username, password))
  }

  static async fetch(
    endpoint: Endpoint,
    opts: ?Params
  ): Promise<FetchResponse> {
    const res = await Pixiv.fetch(endpoint, { params: opts })

    const nextParams: ?Params = res.nextUrl ? parseUrl(res.nextUrl) : null

    return {
      response: normalizeIllusts(res),
      params: nextParams,
      nextUrl: res.nextUrl,
    }
  }

  static async userFollowAdd(id: number) {
    const result = await Pixiv.userFollowAdd(id)
    return result
  }

  static async userFollowDelete(id: number) {
    const r = await Pixiv.userFollowDelete(id)
    return r
  }
  static async userIllusts(id: number, type) {
    const r = await Pixiv.userIllusts(id, { type })
    return r
  }
  static async illustBookmarkAdd(
    id: number,
    isPublic: boolean = true
  ): Promise<Object> {
    const restrict = isPublic ? 'public' : 'private'
    const r = await Pixiv.illustBookmarkAdd(id, { restrict })
    return r
  }
  static async userDetail(id: number) {
    const r = await Pixiv.userDetail(id)
    return r
  }
}

export default Api
