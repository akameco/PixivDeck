// @flow
type Id = number;

export const shareTwitter = (id: Id) => ({type: 'SHARE_TWITTER', id});

export const openPixiv = (id: Id) => ({type: 'OPEN_PIXIV', id});
