import { SAVE_DATA, UserInterface, FeedActionTypes } from '../types';

interface FeedState {
  posts: UserInterface
}
const initialState: FeedState = {
  posts: {
    results: [],
    info: {
      seed: "",
      results: 1,
      page: 1,
    }
  }
};
export function feedReducer(state: FeedState = initialState, action: FeedActionTypes): FeedState {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        ...state,
        posts: action.payload
      };
    }
    default:
      return state
  }
};