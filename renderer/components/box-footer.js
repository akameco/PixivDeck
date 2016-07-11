// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import {union} from 'lodash';
import Tag from './tag';
import styles from './box-footer.css';

type Props = {
	onClickTag: (tag: string) => void,
	tags: Array<string>
};

class BoxFooter extends Component {
	props: Props;

	handleTagClick = (tag: string) => {
		console.log(tag);
	}

	render() {
		const Tags = union(this.props.tags).map(item =>
			<Tag key={item} name={item} onClick={this.props.onClickTag}/>
		);
		return (
			<div styleName="base">
				{Tags}
			</div>
		);
	}
}

export default cssModules(BoxFooter, styles);
