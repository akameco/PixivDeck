// @flow
import {Schema, arrayOf} from 'normalizr';

const user = new Schema('users', {idAttribute: 'id'});
const illusts = new Schema('illusts', {idAttribute: 'id'});

illusts.define({user});

export default {
	ILLUST: illusts,
	ILLUSTS: arrayOf(illusts)
};
