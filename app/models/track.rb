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

  validates :title, :genre, :user_id, :track_upload, presence: true
  has_attached_file :track_upload
  validates_attachment_content_type :track_upload, content_type: /\Aaudio\/.*\z/

end
