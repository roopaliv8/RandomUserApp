import { SAVE_DATA, FeedActionTypes, UserInterface, UserDataInterface, SAVE_DETAILS_DATA, SAVE_DATA_SUCCESS } from '../types';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';
import { Dispatch } from "redux";
import axios from 'axios'
import { config } from '@core/config';
import { all, call, put, takeLatest } from "redux-saga/effects";

export const loadUsers = (payload: any) => {
  return { type: SAVE_DATA_SUCCESS, payload };
};

const saveDataSuccess: ActionCreator<FeedActionTypes> = (posts: UserInterface) => {
  return { type: SAVE_DATA, payload: posts };
}

export const loadDetial = (payload: UserDataInterface) => {
  return { type: SAVE_DETAILS_DATA, payload };
};

const saveData = (count: number) => axios.get(`${config.serverUrl}/api/?results=${count}`);

function* saveDataSaga({ payload }: any) {
  yield put(request());
  try {
    const { data } = yield call(saveData, payload);
    yield put(saveDataSuccess(data))
  } catch (e) {
    yield put(failure('Server error.'))
  }
}
export function* saveSaga() {
  yield all([takeLatest(SAVE_DATA_SUCCESS, saveDataSaga)]);
}