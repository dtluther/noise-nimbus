class User < ApplicationRecord
  validates :email, :username, :password_digest, presense: true
  validates :password, length: { minimum: 6, allow_nil: false }

  
end
