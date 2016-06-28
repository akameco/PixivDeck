import {fork} from 'redux-saga/effects';
import ipcSaga from './ipc';

export default function * rootSaga() {
	yield fork(ipcSaga);
}
