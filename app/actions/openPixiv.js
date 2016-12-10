// @flow
import {shell} from 'electron'

export const openPixiv = (id: number) => () => {
	shell.openExternal(`http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`)
}
