// @flow
type Id = number;

export type MiscAction =
  | {|type: 'SHARE_TWITTER', id: Id|}
  | {|type: 'OPEN_PIXIV', id: Id|};
