class Tag < ApplicationRecord
    validates :tag_name, uniqueness: true
    has_many :posts
    has_many :users, through: :posts
end
