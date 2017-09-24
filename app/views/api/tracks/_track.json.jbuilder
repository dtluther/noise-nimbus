json.extract! track, :id, :title, :genre, :user_id
json.track_upload_url asset_path(track.track_upload.url)
