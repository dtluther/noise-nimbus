class User < ApplicationRecord
  has_many :tracks
  has_many :comments
  has_many :plays,
    primary_key: :id,
    foreign_key: :listener_id,
    class_name: :Play
  has_many :played_songs,
    through: :plays,
    source: :track

  validates :email, :username, :password_digest, presense: true
  validates :password, length: { minimum: 6, allow_nil: false }


end
