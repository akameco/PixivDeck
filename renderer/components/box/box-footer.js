// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {union} from 'lodash';
import Tag from './tag';
import styles from './box-footer.css';

type Props = {
	onClickTag: (tag: string) => void,
	tags: Array<string>
};

@CSSModules(styles)
export default class BoxFooter extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return nextProps.tags.length !== this.props.tags.length;
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
