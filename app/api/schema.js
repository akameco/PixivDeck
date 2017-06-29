// @flow
// $FlowFixMe
import { schema, normalize } from 'normalizr'

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

export function normalizeData(response: Object): Response {
  return normalize(response, mySchema)
}

export default mySchema
