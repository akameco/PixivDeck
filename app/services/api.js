// @flow
/* eslint-disable camelcase */
import { stringify } from 'querystring'
// $FlowFixMe
import { schema, normalize } from 'normalizr'
import camelcaseKeys from 'camelcase-keys'
import decamelizeKeys from 'decamelize-keys'
import axios from 'axios'

const userSchema = new schema.Entity('users', { idAttribute: 'id' })

export const illustSchema = new schema.Entity('illusts', {
  user: userSchema,
  idAttribute: 'id',
})

const mySchema = {
  illust: illustSchema,
  illusts: [illustSchema],
}

export type Response = {
  result: {
    illusts: Array<number>,
    nextUrl: string,
  },
  entities: Object,
}

function normalizeData(response: Object): Response {
  return normalize(response, mySchema)
}

type UserInfo = {
  username: string,
  password: string,
  refreshToken?: string,
}

const AUTH_URL = 'https://oauth.secure.pixiv.net/auth/token'

type AuthResponse = {
  accessToken: string,
  user: Object,
}

const defaultReqConfig = {
  client_id: 'MOBrBDS8blbauoSck0ZfDbtuzpyT',
  client_secret: 'lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj',
  get_secure_url: 1,
}

export async function fetchAuth({
  username,
  password,
  refreshToken,
}: UserInfo): Promise<AuthResponse> {
  const data = refreshToken
    ? {
        ...defaultReqConfig,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }
    : {
        ...defaultReqConfig,
        grant_type: 'password',
        username,
        password,
      }

  const {
    data: { response },
  } = await axios.post(AUTH_URL, stringify(data), {
    transformResponse: [
      rowData => {
        try {
          return JSON.parse(rowData)
        } catch (err) {
          return rowData
        }
      },
    ],
  })
  return camelcaseKeys(response, { deep: true })
}

function fetchFactory(opts?: Object) {
  return axios.create({
    baseURL: 'https://app-api.pixiv.net',
    headers: {
      'App-OS': 'ios',
      'App-OS-Version': '10.3.1',
      'App-Version': '6.7.1',
      'User-Agent': 'PixivIOSApp/6.7.1 (iOS 10.3.1; iPhone8,1)',
      ...opts,
    },
  })
}

export async function getRequest(
  endpoint: string,
  params?: Object,
  token?: ?string
) {
  const request = fetchFactory(
    token ? { Authorization: `Bearer ${token}` } : {}
  )
  const { data: result } = await request.get(
    endpoint,
    params ? { params: decamelizeKeys(params) } : null
  )

  const camelcasedJSON = camelcaseKeys(result, { deep: true })
  return normalizeData(camelcasedJSON)
}

export async function postRequest(
  endpoint: string,
  data: Object,
  token: string
) {
  const request = fetchFactory({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`,
  })
  const { data: result } = await request.post(
    endpoint,
    stringify(decamelizeKeys(data))
  )
  return camelcaseKeys(result, { deep: true })
}
