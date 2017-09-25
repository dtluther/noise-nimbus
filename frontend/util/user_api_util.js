export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
    dataType: "JSON"
  })
);
