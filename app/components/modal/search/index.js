// @flow
import {connect} from 'react-redux';
import type {Dispatch} from '../../../types';
import {addColumn} from '../../../actions';
import Modal from './search-modal';

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onSubmit: (tag: string) => {
			dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
		}
	};
}

export default connect(undefined, mapDispatchToProps)(Modal);
