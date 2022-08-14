class User < ApplicationRecord
    has_many :activities;
    has_many :itineraries, through: :activities;

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { maximum: 30 }

    validates :full_name, presence: true, length: { maximum: 30 }

    validates :email, presence: true, uniqueness: true, length: { maximum: 30 }

end
