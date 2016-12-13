// @flow
type Id = number;

export const setWallpaper = (id: Id) => (
	{type: 'SET_WALLPAPER', id}
)

export const shareTwitter = (id: Id) => (
	{type: 'SHARE_TWITTER', id}
)

export const openPixiv = (id: Id) => (
	{type: 'OPEN_PIXIV', id}
)
