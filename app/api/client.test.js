/**
 * @jest-environment node
*/
// @flow
import { fetchAuth, getRequest, postRequest } from './client'

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

  test('have nextUrl', async () => {
    const { accessToken } = await fetchAuth(info)

    const ranking = await getRequest(accessToken, '/v1/illust/ranking', {
      mode: 'day',
    })
    expect(ranking).toHaveProperty('nextUrl')
  })

  test('get success', async () => {
    const { accessToken } = await fetchAuth(info)

    const data = await getRequest(accessToken, '/v1/user/detail', {
      userId: 471355,
    })
    expect(data).toHaveProperty('profile')
  })

  test('post success', async () => {
    const { accessToken } = await fetchAuth(info)

    const postData = await postRequest(accessToken, '/v2/illust/bookmark/add', {
      illustId: 63576594,
      restrict: 'public',
    })
    expect(postData).toEqual({})
  })
})
