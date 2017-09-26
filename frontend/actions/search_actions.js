import { search } from '../util/search_api_util';

export const omnisearch = query => dispatch => {
  return (
    search(query).then(data => console.log(data))
  );
};
