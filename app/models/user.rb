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

  validates :email, :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :username, uniqueness: true

  has_attached_file :image, default_url: "app/assets/images/noise_nimbus_purple.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
