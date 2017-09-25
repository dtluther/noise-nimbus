json.merge! track.attributes
json.username track.artist.username
json.track_upload_url asset_path(track.track_upload.url)
