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
  illusts: [illustSchema],
}

export type Response = {
  result: Object,
  entities: Object,
}

function normalizeData(response: Object): Response {
  return normalize(response, mySchema)
}

type UserInfo = {
  username: string,
  password: string,
}

const AUTH_URL = 'https://oauth.secure.pixiv.net/auth/token'

type AuthResponse = {
  accessToken: string,
  user: Object,
}

export async function fetchAuth({
  username,
  password,
}: UserInfo): Promise<AuthResponse> {
  const data = {
    client_id: 'bYGKuGVw91e0NMfPGp44euvGt59s',
    client_secret: 'HP3RmkgAmEGro0gn1x9ioawQE8WMfvLXDz3ZqxpK',
    get_secure_url: 1,
    grant_type: 'password',
    username,
    password,
  }

  const { data: { response } } = await axios.post(AUTH_URL, stringify(data), {
    transformResponse: [
      function(data) {
        try {
          return JSON.parse(data)
        } catch (err) {
          return data
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
      'App-OS-Version': '9.3.3',
      'App-Version': '6.0.9',
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
