// @flow
import React, {Component} from 'react'
import Avater from '../../common/Avater'
import styles from './BoxHeader.css'
import Caption from './Caption'
import Profile from './Profile'
import BookmarkButton from './BookmarkButton'

type Props = {
	name: string,
	account: string,
	img: string,
	title: string,
	isBookmarked: bool,
	caption?: string,
	onClick: () => void,
	isIllustComment: bool,
};

const Title = ({title}: {title: string}) => <div className={styles.title}>{title}</div>

export default class BoxHeader extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return (
			this.props.name !== nextProps.name ||
			this.props.isIllustComment !== nextProps.isIllustComment
		)
	}

	render() {
		const {name, account, img, title, caption, isIllustComment, onClick, isBookmarked} = this.props
		return (
			<div className={styles.base}>
				<a onClick={this.props.onClick} style={{margin: 5}}>
					<Avater src={img} size={48}/>
				</a>
				<div className={styles.wrap}>
					<Title title={title}/>
					<Profile name={name} account={account} onClick={onClick}/>
					<BookmarkButton isBookmarked={isBookmarked}/>
					{isIllustComment && caption && <Caption caption={caption}/>}
				</div>
			</div>
		)
	}
}
