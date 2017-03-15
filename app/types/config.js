// @flow
export type Config = {
  isIllustComment: boolean,
  isIllustOnly: boolean,
};

export type ConfigAction =
  | {|type: 'ILLUST_CAPTION_SHOW', isShow: boolean|}
  | {|type: 'ILLUST_ONLY', isShow: boolean|};
