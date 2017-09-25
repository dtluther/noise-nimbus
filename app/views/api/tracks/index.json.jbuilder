# json.array! @tracks do |track|
#   json.partial! 'api/tracks/track', track: track
# end

@tracks.each do |track|
  json.set! track.id do
    json.partial! 'api/tracks/track', track: track
  end
end
