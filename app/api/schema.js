// @flow
import {schema} from 'normalizr'

const user = new schema.Entity('users', {idAttribute: 'id'})
const illusts = new schema.Entity('illusts', {
	user,
	idAttribute: 'id',
})

const mySchema = {
	ILLUST: illusts,
	ILLUSTS: [illusts],
}

export default mySchema
