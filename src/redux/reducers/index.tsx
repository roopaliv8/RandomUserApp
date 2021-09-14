import { combineReducers } from 'redux';
import { detailsReducer, feedReducer} from './feed.reducer';
export const rootReducer = combineReducers({
  feed: feedReducer,
  details:detailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;