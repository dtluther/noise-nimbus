json.partial! "api/users/user", user: @user

json.tracks do
  json.array! @user.tracks, partial: 'api/tracks/track', as: :track
end
