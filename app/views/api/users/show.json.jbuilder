json.partial! "api/users/user", user: @user

# @user.tracks.each do |track|
#   json.set! track.id do
#     json.partial! 'api/tracks/track', track: track
#   end
# end

# json.tracks do
#   json.array! @user.tracks, partial: 'api/tracks/track', as: :track
# end

json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
