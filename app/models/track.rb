class Track < ApplicationRecord
  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
  has_many :comments
  has_many :plays
  has_many :user_listens,
    through: :plays,
    source: :listener

  validates :title, :genre, :user_id, presence: true

  has_attached_file :track, default_url: "app/assets/images/noise_nimbus_purple.png"
  validates_attachment_content_type :track, content_type: /\Aimage\/.*\z/

end
