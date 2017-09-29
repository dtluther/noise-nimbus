json.array! @users do |user|
  json.partial! 'api/users/user', user: user
end

json.array! @tracks do |track|
  json.partial! 'api/tracks/track', track: track
end
