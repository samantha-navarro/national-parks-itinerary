class Park < ApplicationRecord
    has_many :activities, dependent: :destroy
    # has_many :users, through: :activities

    validates :image, presence: true
end
