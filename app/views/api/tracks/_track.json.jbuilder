json.extract! track, :id, :title, :genre
json.track_upload_url asset_path(track.track_upload.url)
