class Park < ApplicationRecord
    has_many :activities, dependent: :destroy
    

    validates :image, presence: true
end
