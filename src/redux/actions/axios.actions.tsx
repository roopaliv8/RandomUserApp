import { SAVE_DATA, FeedActionTypes, UserInterface, UserDataInterface, SAVE_DETAILS_DATA } from '../types';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';
import { Dispatch } from "redux";
import axios from 'axios'
import { config } from '@core/config';

const saveDataSuccess: ActionCreator<FeedActionTypes> = (posts: UserInterface) => {
  return { type: SAVE_DATA, payload: posts };
}

const saveDetails: ActionCreator<FeedActionTypes> = (details: UserDataInterface) => {
  return { type: SAVE_DETAILS_DATA, payload: details };
}
export function saveData(count: number) {
  return async (dispatch: Dispatch) => {
    dispatch(request());
    try {
      let { data } = await axios.get(`${config.serverUrl}/api/?results=${count}`)
      dispatch(saveDataSuccess(data))
    } catch (error) {
      dispatch(failure('Server error.'));
    }
  };
}
export function saveDetailsData(data: UserDataInterface) {
  return (dispatch: Dispatch) => {
    dispatch(saveDetails(data))
  }
}