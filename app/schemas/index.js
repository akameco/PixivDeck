// @flow
import {Schema, arrayOf} from 'normalizr';

const workSchema = new Schema('works', {idAttribute: 'id'});
const userSchema = new Schema('users', {idAttribute: 'id'});

workSchema.define({
	user: userSchema
});

export default {
	WORK: workSchema,
	WORK_ARRAY: arrayOf(workSchema)
};
