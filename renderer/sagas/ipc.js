import {ipcRenderer} from 'electron';
import {eventChannel} from 'redux-saga';
import {take, fork, put, call} from 'redux-saga/effects';
import {camelizeKeys} from 'humps';
import {receiveWorks} from '../actions';

function subscribe() {
	return eventChannel(emit => {
		ipcRenderer.on('ranking', (ev, data) => {
			const res = data.response[0].works.map(v => v.work);
			const camelizedJson = camelizeKeys(res);
			emit(receiveWorks(camelizedJson));
		});
		return () => {};
	});
}

function * handleIPC() {
	const channel = yield call(subscribe);
	while(true) { // eslint-disable-line
		const action = yield take(channel);
		yield put(action);
	}
}

export default function * ipcSaga() {
	yield fork(handleIPC);
}
