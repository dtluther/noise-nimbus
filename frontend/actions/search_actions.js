import { search } from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

const receiveSearch = data => {
  return {
    type: RECEIVE_SEARCH,
    data
  };
};

export const omnisearch = query => dispatch => {
  return (
    search(query).then(data => dispatch(receiveSearch(query)))
  );
};
