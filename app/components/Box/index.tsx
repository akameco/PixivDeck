import * as React from 'react'
import { User } from 'types/user'
import { Illust } from 'types/illust'
import BoxHeader from 'components/BoxHeader'
import LazyLoadImg from 'components/LazyLoadImg'
import BoxFooter from './BoxFooter'
import BoxWrapper from './boxStyles'

export interface Props {
  id: number | string
  illust: Illust
  user: User
  isIllustOnly: boolean
  isShowCaption: boolean
  onClick: (type: 'illust' | 'manga') => undefined
  onClickUser: (userId: number) => undefined
  onClickTag: (tag: string) => undefined
  onContextMenu: (event: Event) => undefined
}

function Box(props: Props) {
  const {
    id,
    illust,
    user,
    onClick,
    onClickTag,
    onClickUser,
    isIllustOnly,
    isShowCaption,
    onContextMenu,
  } = props // const { isIntersecting, isHidden } = this.state

  const tags = illust.tags.map(x => x.name)
  const isManga = illust.pageCount > 1
  return (
    <BoxWrapper onContextMenu={onContextMenu} data-id={id}>
      {!isIllustOnly && (
        <BoxHeader
          user={user}
          illust={illust}
          isShowCaption={isShowCaption}
          onClick={onClickUser.bind(null, user.id)}
        />
      )}
      <LazyLoadImg
        src={illust.imageUrls.medium}
        isManga={isManga}
        onClick={onClick.bind(null, isManga ? 'manga' : 'illust')}
      />
      {!isIllustOnly && <BoxFooter tags={tags} onClickTag={onClickTag} />}
    </BoxWrapper>
  )
}

export default Box
