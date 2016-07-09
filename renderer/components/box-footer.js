// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './box-footer.css';

type Props = {
	tags: Array<string>
};

class BoxFooter extends Component {
	props: Props;

	render() {
		const {tags} = this.props;
		const Tags = tags.map(item =>
			<a key={item}>#{item}</a>
		);
		return (
			<div styleName="base">
				{Tags}
			</div>
		);
	}
}

export default cssModules(BoxFooter, styles);
