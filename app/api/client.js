// @flow
/* eslint-disable camelcase */
import { stringify } from 'querystring'
import camelcaseKeys from 'camelcase-keys'
import decamelizeKeys from 'decamelize-keys'
import axios from 'axios'

type UserInfo = {
  username: string,
  password: string,
}

const AUTH_URL = 'https://oauth.secure.pixiv.net/auth/token'

export async function fetchAuth({ username, password }: UserInfo) {
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

function fetchFactory(token: string, opts?: Object) {
  return axios.create({
    baseURL: 'https://app-api.pixiv.net',
    headers: {
      'App-OS': 'ios',
      'App-OS-Version': '9.3.3',
      'App-Version': '6.0.9',
      Authorization: `Bearer ${token}`,
      ...opts,
    },
  })
}

export async function getRequest(
  token: string,
  endpoint: string,
  params: Object
) {
  const request = fetchFactory(token)
  const { data: result } = await request.get(endpoint, {
    params: decamelizeKeys(params),
  })
  return camelcaseKeys(result, { deep: true })
}

export async function postRequest(
  token: string,
  endpoint: string,
  data: Object
) {
  const request = fetchFactory(token, {
    'Content-Type': 'application/x-www-form-urlencoded',
  })
  const { data: result } = await request.post(
    endpoint,
    stringify(decamelizeKeys(data))
  )
  return camelcaseKeys(result, { deep: true })
}
