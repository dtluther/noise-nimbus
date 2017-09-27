json.merge! track.attributes
json.username track.artist.username
json.user_image_url asset_path(track.artist.image.url)
json.track_upload_url asset_path(track.track_upload.url)
