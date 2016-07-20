// @flow
/* eslint-disable camelcase */
export const rankMap = (mode: string) => {
	return {
		daily: 'デイリー',
		weekly: 'ウィークリー',
		monthly: 'マンスリー',
		rookie: 'ルーキー',
		original: 'オリジナル',
		male: '男子に人気',
		female: '女子に人気',
		daily_r18: 'R18 デイリー',
		weekly_r18: 'R18 ウィークリー',
		male_r18: 'R18 男子に人気',
		female_r18: 'R18 女子に人気',
		r18g: 'R18 G'
	}[mode];
};
/* eslint-enable camelcase */
