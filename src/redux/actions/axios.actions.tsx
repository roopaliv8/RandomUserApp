import { SAVE_DATA, FeedActionTypes, UserInterface, UserDataInterface, SAVE_DETAILS_DATA, SAVE_DATA_SUCCESS } from '../types';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';
import { Dispatch } from "redux";
import axios from 'axios'
import { config } from '@core/config';
import { all, call, put, takeLatest } from "redux-saga/effects";

export const loadUsers = () => {
  return { type: SAVE_DATA_SUCCESS };
};

const saveDataSuccess: ActionCreator<FeedActionTypes> = (posts: UserInterface) => {
  return { type: SAVE_DATA, payload: posts };
}

export const loadDetial = (payload: UserDataInterface) => {
  return { type: SAVE_DETAILS_DATA, payload };
};

const saveData = () => axios.get(`${config.serverUrl}/api/?results=10`);

function* saveDataSaga() {
  yield put(request());
  try {
    const { data } = yield call(saveData);
    yield put(saveDataSuccess(data))
  } catch (e) {
    yield put(failure('Server error.'))
  }
}
export function* saveSaga() {
  yield all([takeLatest(SAVE_DATA_SUCCESS, saveDataSaga)]);
}