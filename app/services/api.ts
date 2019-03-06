/* eslint-disable @typescript-eslint/camelcase */
import { stringify } from 'querystring'
import { schema, normalize } from 'normalizr'
import camelcaseKeys from 'camelcase-keys'
import decamelizeKeys from 'decamelize-keys'
import axios, { AxiosInstance } from 'axios'

const userSchema = new schema.Entity('users', { idAttribute: 'id' })

export const illustSchema = new schema.Entity('illusts', {
  user: userSchema,
  idAttribute: 'id',
})

const mySchema = {
  illust: illustSchema,
  illusts: [illustSchema],
}

export interface Response {
  result: {
    illusts: number[]
    nextUrl: string
  }
  entities: object
}

function normalizeData(response: object): Response {
  return normalize(response, mySchema)
}

interface UserInfo {
  username: string
  password: string
  refreshToken?: string
}
const AUTH_URL = 'https://oauth.secure.pixiv.net/auth/token'
interface AuthResponse {
  accessToken: string
  user: object
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
        // eslint-disable-next-line @typescript-eslint/camelcase
        grant_type: 'refresh_token',
        // eslint-disable-next-line @typescript-eslint/camelcase
        refresh_token: refreshToken,
      }
    : { ...defaultReqConfig, grant_type: 'password', username, password }
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const transform = (rowData: string): unknown => {
    try {
      return JSON.parse(rowData)
    } catch (error) {
      return rowData
    }
  }
  const {
    data: { response },
  } = await axios.post(AUTH_URL, stringify(data), {
    transformResponse: [transform],
  })
  return camelcaseKeys(response, {
    deep: true,
  })
}

function fetchFactory(opts?: object): AxiosInstance {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getRequest(
  endpoint: string,
  params?: object,
  token?: string | null | undefined
) {
  const request = fetchFactory(
    token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}
  )
  const { data: result } = await request.get(
    endpoint,
    params
      ? {
          params: decamelizeKeys(params),
        }
      : undefined
  )
  const camelcasedJSON = camelcaseKeys(result, {
    deep: true,
  })
  return normalizeData(camelcasedJSON)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function postRequest(
  endpoint: string,
  data: object,
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
  return camelcaseKeys(result, {
    deep: true,
  })
}
