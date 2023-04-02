class User < ApplicationRecord
    validates :username, presence: true
    validates :username, uniqueness: true
    has_secure_password
    has_many :posts
    has_many :tags, through: :posts
end
