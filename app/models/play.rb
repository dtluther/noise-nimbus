class Play < ApplicationRecord
  belongs_to :track
  belongs_to :listener,
    primary_key: :id,
    foreign_key: :listener_id,
    class_name: :User
end
