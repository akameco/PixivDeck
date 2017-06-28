// @flow
import React from 'react'
import type { User } from 'types/user'
import type { Illust } from 'types/illust'
import BoxHeader from 'components/BoxHeader'
import BoxFooter from './BoxFooter'
import BoxImage from './BoxImage'
import BoxWrapper from './boxStyles'

export type Props = {
  id: number | string,
  illust: Illust,
  user: User,
  isIllustOnly: boolean,
  isShowCaption: boolean,
  onClick: () => void,
  onClickUser: () => void,
  onClickTag: (tag: string) => void,
  onContextMenu: (event: Event) => void,
}

class Box extends React.PureComponent {
  props: Props

  shouldComponentUpdate() {
    return false
  }

  render() {
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
    } = this.props

    // const { isIntersecting, isHidden } = this.state

    const tags = illust.tags.map(x => x.name)

    return (
      <BoxWrapper onContextMenu={onContextMenu} data-id={id}>
        {!isIllustOnly &&
          <BoxHeader
            user={user}
            illust={illust}
            isShowCaption={isShowCaption}
            onClick={onClickUser}
          />}
        <BoxImage
          src={illust.imageUrls.medium}
          isManga={illust.pageCount > 1}
          onClick={onClick}
        />
        {!isIllustOnly && <BoxFooter tags={tags} onClickTag={onClickTag} />}
      </BoxWrapper>
    )
  }
}

export default Box
