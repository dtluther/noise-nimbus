export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    dataType: "JSON",
    contentType: false,
    processData: false,
    data: user
  })
);

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
