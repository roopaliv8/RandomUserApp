import { SAVE_DATA, FeedActionTypes, UserInterface } from '../types';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';
import { Dispatch } from "redux";
import axios from 'axios'

const saveDataSuccess: ActionCreator<FeedActionTypes> = (posts: UserInterface) => {
  return { type: SAVE_DATA, payload: posts };
}
export function saveData() {
  return async (dispatch: Dispatch) => {
    dispatch(request());
    try {
      let { data } = await axios.get("https://randomuser.me/api/")
      dispatch(saveDataSuccess(data))
    } catch (error) {
      dispatch(failure('Server error.'));
    }
  };
}