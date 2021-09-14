import { SAVE_DATA, UserInterface, FeedActionTypes, UserDataInterface, SAVE_DETAILS_DATA } from '../types';

interface FeedState {
  posts: UserInterface
}
interface DetailsState {
  details: UserDataInterface
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
const initalDetails: DetailsState = {
  details: {
    gender: '',
    name: {
      title: '',
      first: '',
      last: '',
    },
    email: '',
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    registered: {
      date: '',
      age: 0,
    },
  }
}
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
export function detailsReducer(state: DetailsState = initalDetails, action: FeedActionTypes): DetailsState {
  switch (action.type) {
    case SAVE_DETAILS_DATA: {
      return {
        ...state,
        details: action.payload
      };
    }
    default:
      return state
  }
};