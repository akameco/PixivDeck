import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies

export default () => next => action => {
	if (action.type !== 'RANKING_REQUEST') {
		return next(action);
	}

	if (action.mode && action.page) {
		ipcRenderer.send('ranking', {
			mode: action.mode,
			page: action.page
		});
	}
	return next(action);
};
