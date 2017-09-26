export const search = query => {
  return $.ajax({
    method: 'get',
    url: 'api/omnisearch',
    data: { query }
  });
};
