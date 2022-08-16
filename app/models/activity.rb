class Activity < ApplicationRecord
  belongs_to :park
  

  validates :image, presence: true
end
