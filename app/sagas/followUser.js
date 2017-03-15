import {call, fork, takeEvery} from 'redux-saga/effects';
import * as Actions from 'constants/user';
import Api from '../api';

type hasId = {
  id: number,
};

function* follow({id}: hasId) {
  try {
    yield call(Api.userFollowAdd, id);
  } catch (err) {}
}

function* unfollow({id}: hasId) {
  try {
    yield call(Api.userFollowDelete, id);
  } catch (err) {}
}

function* followWatch() {
  yield* takeEvery(Actions.FOLLOW, follow);
}

function* unfollowWatch() {
  yield* takeEvery(Actions.UN_FOLLOW, unfollow);
}

function* root() {
  yield fork(followWatch);
  yield fork(unfollowWatch);
}

export default root;
