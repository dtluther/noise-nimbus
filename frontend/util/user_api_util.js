export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    dataType: "JSON"
  })
);

export const fetchUser = username => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${username}`,
    dataType: 'JSON'
  });
};
