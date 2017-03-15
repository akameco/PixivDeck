// @flow
import type {Endpoint, Params} from 'types/column';
import Pixiv, {normalizeIllusts} from './pixiv';
import {parseUrl} from './util';

type FetchResponse = {
  response: Object,
  params: ?Params,
  nextUrl: ?string,
};

class Api {
  static login(username: string, password: string) {
    return Promise.resolve().then(() => Pixiv.login(username, password));
  }

  static async fetch(
    endpoint: Endpoint,
    opts: ?Params,
  ): Promise<FetchResponse> {
    const res = await Pixiv.fetch(endpoint, {params: opts});

    const nextParams: ?Params = res.nextUrl ? parseUrl(res.nextUrl) : null;

    return {
      response: normalizeIllusts(res),
      params: nextParams,
      nextUrl: res.nextUrl,
    };
  }

  static async userFollowAdd(id: number) {
    return await Pixiv.userFollowAdd(id);
  }

  static async userFollowDelete(id: number) {
    return await Pixiv.userFollowDelete(id);
  }
  static async userIllusts(id: number, type) {
    return await Pixiv.userIllusts(id, {type});
  }
  static async illustBookmarkAdd(
    id: number,
    isPublic: boolean = true,
  ): Promise<Object> {
    const restrict = isPublic ? 'public' : 'private';
    return await Pixiv.illustBookmarkAdd(id, {restrict});
  }
  static async userDetail(id: number) {
    return await Pixiv.userDetail(id);
  }
}

export default Api;
