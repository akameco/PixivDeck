/**
 * @jest-environment node
 */
import { fetchAuth, getRequest, postRequest } from './api'

const USERNAME: string | null | undefined = process.env.USERNAME
const PASSWORD: string | null | undefined = process.env.PASSWORD

describe('API', () => {
  if (!(USERNAME && PASSWORD)) {
    it.skip('skip api test', () => {})
    return
  }

  const info = {
    username: USERNAME,
    password: PASSWORD,
  }

  it.skip('login success', async () => {
    const res = await fetchAuth(info)
    expect(res.user.account).toStrictEqual(USERNAME)
  })

  it.skip('no params', async () => {
    const { accessToken } = await fetchAuth(info)
    const { result } = await getRequest(
      '/v1/illust/ranking?mode=day',
      {},
      accessToken
    )
    expect(result).toHaveProperty('nextUrl')
  })

  it.skip('have nextUrl', async () => {
    const { accessToken } = await fetchAuth(info)
    const { result } = await getRequest(
      '/v1/illust/ranking',
      { mode: 'day' },
      accessToken
    )
    expect(result).toHaveProperty('nextUrl')
  })

  it.skip('get success', async () => {
    const { accessToken } = await fetchAuth(info)
    const { result } = await getRequest(
      '/v1/user/detail',
      { userId: 471355 },
      accessToken
    )
    expect(result).toHaveProperty('profile')
  })

  it.skip('post success', async () => {
    const { accessToken } = await fetchAuth(info)
    const postData = await postRequest(
      '/v2/illust/bookmark/add',
      { illustId: 63576594, restrict: 'public' },
      accessToken
    )
    expect(postData).toStrictEqual({})
  })
})
