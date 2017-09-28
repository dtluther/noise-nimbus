json.merge! comment.attributes
json.author comment.author.username
json.authorImage asset_path(comment.author.image.url)
