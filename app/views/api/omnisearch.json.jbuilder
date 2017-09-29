# json.array! @users do |user|
#   json.partial! 'api/users/user', user: user
# end

json.array! @tracks do |track|
  json.title track.title
  json.username track.artist.username
  json.user_image_url asset_path(track.artist.image.url)
end

# @tracks.each do |track|
#   json.set! track.id do
#     json.partial! 'api/tracks/track', track: track
#   end
# end
