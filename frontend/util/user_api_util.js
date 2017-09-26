export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    dataType: "JSON"
  })
);

export const fetchUser = username => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${username}`
  });
};
