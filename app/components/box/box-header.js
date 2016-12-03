// @flow
import React, {Component} from 'react'
import Avater from './avater'
import styles from './BoxHeader.css'
import Caption from './header/Caption'

type Props = {
	name: string,
	account: string,
	img: string,
	title: string,
	caption?: string,
	onClick: () => void,
	isIllustComment: bool,
};

export default class BoxHeader extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return (
			this.props.name !== nextProps.name ||
			this.props.isIllustComment !== nextProps.isIllustComment
		)
	}

	render() {
		const {name, account, img, title, caption, isIllustComment, onClick} = this.props
		return (
			<div className={styles.base}>
				<a onClick={this.props.onClick}>
					<Avater img={img}/>
				</a>
				<div className={styles.wrap}>
					<Title title={title}/>
					<Profile name={name} account={account} onClick={onClick}/>
					{isIllustComment && caption && <Caption caption={caption}/>}
				</div>
			</div>
		)
	}
}

const Title = ({title}: {title: string}) => <div className={styles.title}>{title}</div>

function Profile({name, account, onClick}: {
	name: string, account: string, onClick: () => void
}) {
	return (
		<div>
			<div className={styles.Profile}>
				<p className={styles.profileAreaLine}>
					<a className={styles.name} onClick={onClick}>{name}</a>
					<a className={styles.account} onClick={onClick}>{account}</a>
				</p>
			</div>
		</div>
	)
}
