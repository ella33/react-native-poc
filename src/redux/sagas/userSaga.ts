import actions, { ACTION_TYPES } from '@redux/actions/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { mapServerToLocalUserDetails } from './mappingFunctions/user';
import axios from 'axios';

function* fetchUser(action) {
  try {
    const response = yield call(axios.get, `/users/${action.data.id}`);
    yield put(actions.loadUserSuccess(mapServerToLocalUserDetails(response.data)));
  } catch (e) {
    yield put(actions.loadUserFail());
  }
}

function* userSaga() {
  yield takeLatest(ACTION_TYPES.LOAD_USER, fetchUser);
}

export default userSaga;
