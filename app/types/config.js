// @flow
export type Config = {
	isIllustComment: bool,
	isIllustOnly: bool,
}

export type ConfigAction =
	| {|type: 'ILLUST_CAPTION_SHOW', isShow: bool|}
	| {|type: 'ILLUST_ONLY', isShow: bool|}

