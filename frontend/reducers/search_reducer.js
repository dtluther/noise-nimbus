import { RECEIVE_SEARCH } from '../actions/search_actions';


const searchReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.data;

    default:
      return [];
  }
};

export default searchReducer;
