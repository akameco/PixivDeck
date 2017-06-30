/**
 * @jest-environment node
*/
// @flow
import { fetchAuth, getRequest, postRequest } from './api'

const USERNAME: ?string = process.env.USERNAME
const PASSWORD: ?string = process.env.PASSWORD

describe('API', () => {
  if (!(USERNAME && PASSWORD)) {
    return
  }

  const info = {
    username: USERNAME,
    password: PASSWORD,
  }

  test('login success', async () => {
    const res = await fetchAuth(info)
    expect(res.user.account).toEqual(USERNAME)
  })

  test('no params', async () => {
    const { result } = await getRequest('/v1/illust/ranking?mode=day')
    expect(result).toHaveProperty('nextUrl')
  })

  test('have nextUrl', async () => {
    const { result } = await getRequest('/v1/illust/ranking', { mode: 'day' })
    expect(result).toHaveProperty('nextUrl')
  })

  test('get success', async () => {
    const { accessToken } = await fetchAuth(info)

    const { result } = await getRequest(
      '/v1/user/detail',
      { userId: 471355 },
      accessToken
    )
    expect(result).toHaveProperty('profile')
  })

  test('post success', async () => {
    const { accessToken } = await fetchAuth(info)

    const postData = await postRequest(
      '/v2/illust/bookmark/add',
      { illustId: 63576594, restrict: 'public' },
      accessToken
    )
    expect(postData).toEqual({})
  })
})
