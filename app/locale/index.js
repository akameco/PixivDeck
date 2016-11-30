// @flow
/* eslint-disable camelcase */
import dotProp from 'dot-prop'

const obj = {
	illustRanking: {
		day: 'デイリー',
		week: 'ウィークリー',
		month: 'マンスリー',
		day_male: '男子に人気',
		day_female: '女子に人気',
		week_rookie: 'ルーキー',
		week_original: 'オリジナル',
		day_r18: 'R18 デイリー',
		week_r18: 'R18 ウィークリー',
		day_male_r18: 'R18 男子に人気',
		day_female_r18: 'R18 女子に人気',
		week_r18g: 'R18 G',
	},
}

export default (str: string) => {
	return dotProp.get(obj, str)
}
