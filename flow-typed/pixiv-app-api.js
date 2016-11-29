type ID = number | string;
type Word = string;

declare module 'pixiv-app-api' {
	declare class PixivAppApi {
		constructor(username?: string, password?: string): PixivAppApi;
		login(username?: string, password?: string): Promise<Object>;
		authInfo(): Object;
		hasNext(): bool;
		next(): Promise<string>;
		nextQuery(): string;
		userDetail(id: ID, params?: Object): Promise<Object>;
		userIllusts(id: ID, params?: Object): Promise<Object>;
		userFollowAdd(id: ID, data?: Object): Promise<Object>;
		userFollowDelete(id: ID, data?: Object): Promise<Object>;
		userBookmarksIllust(id: ID, params?: Object): Promise<Object>;
		userFollowing(id: ID, params?: Object): Promise<Object>;
		userFollower(id: ID, params?: Object): Promise<Object>;
		userMypixiv(id: ID, params?: Object): Promise<Object>;
		userList(id: ID, params?: Object): Promise<Object>;
		illustDetail(id: ID, params?: Object): Promise<Object>;
		illustNew(params?: Object): Promise<Object>;
		illustFollow(params?: Object): Promise<Object>;
		illustComments(id: ID, params?: Object): Promise<Object>;
		illustRelated(id: ID, params?: Object): Promise<Object>;
		illustRecommended(params?: Object): Promise<Object>;
		illustRecommendedNologin(params?: Object): Promise<Object>;
		illustRanking(params?: Object): Promise<Object>;
		trendingTagsIllust(params?: Object): Promise<Object>;
		searchIllust(word: Word, params?: Object): Promise<Object>;
		searchNovel(word: Word, params?: Object): Promise<Object>;
		searchUser(word: Word, params?: Object): Promise<Object>;
		searchAutoComplete(word: Word): Promise<Object>;
		illustBookmarkDetail(id: ID, params?: Object): Promise<Object>;
		illustBookmarkAdd(id: ID, data?: Object): Promise<Object>;
		illustBookmarkDelete(id: ID, data?: Object): Promise<Object>;
		userBookmarkTagsIllust(params?: Object): Promise<Object>;
		novelRecommended(params?: Object): Promise<Object>;
		mangaNew(params?: Object): Promise<Object>;
		mangaRecommended(params?: Object): Promise<Object>;
		novelRecommendedNologin(params?: Object): Promise<Object>;
		novelNew(params?: Object): Promise<Object>;
		fetch(url: string, params?: Object): Promise<Object>;
	}
	declare module.exports: Class<PixivAppApi>;
}
