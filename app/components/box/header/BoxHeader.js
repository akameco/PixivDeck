// @flow
import React from 'react'
import Avater from '../../common/Avater'
import BookmarkButton from '../../BookmarkButton'
import styles from './BoxHeader.css'
import Caption from './Caption'
import Profile from './Profile'

export type Props = {
	id: number,
	name: string,
	img: string,
	title: string,
	isBookmarked: bool,
	caption?: string,
	onClick: () => void,
	isIllustComment: bool,
};

const Title = ({title}: {title: string}) => <div className={styles.title}>{title}</div>

export default class BoxHeader extends React.PureComponent {
	props: Props;

	render() {
		const {
			id,
			name,
			img,
			title,
			caption,
			isIllustComment,
			onClick,
			isBookmarked,
		} = this.props
		return (
			<div className={styles.base}>
				<a onClick={this.props.onClick} style={{margin: 5}}>
					<Avater src={img} size={48}/>
				</a>
				<div className={styles.wrap}>
					<Title title={title}/>
					<Profile name={name} onClick={onClick}/>
					<div style={{position: 'absolute', top: 5, right: 10}}>
						<BookmarkButton
							id={id}
							isBookmarked={isBookmarked}
							/>
					</div>
					{isIllustComment && caption && <Caption caption={caption}/>}
				</div>
			</div>
		)
	}
}
