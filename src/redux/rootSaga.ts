import { all, fork } from "redux-saga/effects";
import { saveSaga } from "./actions/axios.actions";

export function* rootSaga() {
  yield all([fork(saveSaga)]);
}