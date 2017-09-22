json.extract! user, :id, :username, :first_name
json.image_url asset_path(user.image.url)
