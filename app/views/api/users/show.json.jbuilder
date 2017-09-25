json.partial! "api/users/user", user: @user

# json.tracks do
#   json.array! @user.tracks, partial: 'api/tracks/track', as: :track
# end

json.tracks @user.tracks do |item|
  json.extract! item, :id, :title, :genre, :user_id
end
