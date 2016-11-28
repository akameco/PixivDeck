// @flow
import {shell} from 'electron';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import unionBy from 'lodash.unionby';
import {link} from 'autolinker';
import {camelizeKeys} from 'humps';
import type {
	Dispatch,
	State as S, User,
	Profile,
	Illust, Illusts
} from '../../types';
import {normalizeIllusts, selectIllusts} from '../../actions';
import Box from '../box';
import Pixiv from '../../repo/pixiv';
import Avater from '../common/avater';
import Button from '../common/button';
import AddColumnButton from './AddColumnButton';
import Loading from './Loading';

type Props = {
	user: User,
	dispatch: Dispatch
};

type State = {
	user: ?User,
	illusts: Array<Illust>,
	profile: ?Profile
};

class UserDrawer extends Component {
	props: Props;
	state: State = {
		user: null,
		profile: null,
		illusts: []
	};

	componentDidMount() {
		this.init();
	}

	async init() {
		const {id} = this.props.user;
		const res = await Pixiv.userDetail(id);
		const userDetail = camelizeKeys(res);
		const profile: Profile = userDetail.profile;
		const user: User = userDetail.user;
		const userIllusts = await Pixiv.userIllusts(id);
		const json = normalizeIllusts(userIllusts);
		this.props.dispatch({type: 'SUCCESS_API_REQUEST', response: json});

		const illusts: Illusts = json.entities.illusts;
		const unionByArray = unionBy(this.state.illusts, selectIllusts(json.result, illusts), 'id');
		this.setState({profile, user, illusts: unionByArray});
	}

	renderList() {
		const List = this.state.illusts.map(illust => {
			return (
				<Box
					key={illust.id}
					user={illust.user}
					illust={illust}
					/>
			);
		});
		return List;
	}

	renderLoading() {
		return (
			<Loading/>
		);
	}

	render() {
		const {user, profile} = this.state;

		if (user && user.id && user.profileImageUrls && profile) {
			return (
				<div>
					<Header user={user} profile={profile}/>
					{this.state.illusts.length > 0 && this.renderList()}
				</div>
			);
		}
		return this.renderLoading();
	}
}

const headerStyle = {
	root: {
		backgroundColor: '#eee',
		paddingBottom: '30px'
	},
	imgWrap: {
		position: 'relative',
		width: 170,
		height: 170,
		margin: '20px auto'
	},
	info: {
		textAlign: 'center'
	},
	caption: {
		backgroundColor: '#fff',
		borderRudias: '2px',
		margin: '10px 20px',
		padding: '10px 20px',
		lineHeight: '21px',
		fontSize: '14px'
	}
};

function Header({user, profile}: {user: User, profile: Profile}) {
	return (
		<div style={headerStyle.root}>
			<Navgation user={user} profile={profile}/>
			<div style={headerStyle.imgWrap}>
				<Avater img={user.profileImageUrls.medium} imgStyle={{width: '140px', height: '140px'}}/>
			</div>
			<div style={headerStyle.info}>
				<h1>{user.name}</h1>
			</div>
			<div style={headerStyle.caption}>
				<span
					dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
						__html: link(user.comment)
					}}
					/>
			</div>
		</div>
	);
}

const navgationStyle = {
	root: {
		width: 700,
		position: 'flex',
		left: 'auto',
		transform: 'translateZ(0)',
		height: 50,
		top: 0,
		zIndex: 10
	},
	wrap: {
		display: 'flex',
		textAlign: 'left',
		justifyContent: 'flex-end',
		padding: '10px'
	}
};

function Navgation({user, profile}: {user: User, profile: Profile}) {
	return (
		<div style={navgationStyle.root}>
			<div style={navgationStyle.wrap}>
				{profile.twitter_url && <TwitterButton url={profile.twitter_url}/>}
				<FollowButton userId={user.id} isFollowed={user.isFollowed}/>
				<AddColumnButton user={user}/>
			</div>
		</div>
	);
}

type ID = number | string;
type FollowButtonProps = {
	userId: ID,
	isFollowed: bool
};

function FollowButton({userId, isFollowed}: FollowButtonProps) {
	const follow = async () => {
		await Pixiv.userFollowAdd(userId);
	};

	const unFollow = async () => {
		await Pixiv.userFollowDelete(userId);
	};

	if (isFollowed) {
		return (
			<a onClick={unFollow}>
				<Button text="フォロー解除"/>
			</a>
		);
	}
	return (
		<a onClick={follow}>
			<Button text="フォロー"/>
		</a>
	);
}

function TwitterButton({url}: {url: string}) {
	const onClick = () => shell.openExternal(url);
	return (
		<a style={{margin: '0 10px'}} onClick={onClick}>
			<Button text="twitter"/>
		</a>
	);
}

function mapStateToProps(state: S) {
	if (!state.manage.userId) {
		return {};
	}
	const user = state.entities.users[state.manage.userId];
	return {
		user
	};
}

export default connect(mapStateToProps)(UserDrawer);
