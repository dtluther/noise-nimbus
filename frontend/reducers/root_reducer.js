import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import nowPlayingReducer from './now_playing_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  nowPlaying: nowPlayingReducer,
  searchedTracks: searchReducer
});

export default rootReducer;
