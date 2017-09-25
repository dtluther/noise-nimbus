import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import tracksReducer from './tracks_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  // tracks: tracksReducer,
  errors: errorsReducer,
  session: sessionReducer
});

export default rootReducer;
