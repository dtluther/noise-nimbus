import { combineReducers } from 'react-redux';
import tracksReducer from './tracks_reducer';

const entitiesReducer = combineReducers({
  tracks: tracksReducer
});

export default entitiesReducer;
