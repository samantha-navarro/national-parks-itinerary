class Activity < ApplicationRecord
  belongs_to :park
  belongs_to :user
  
  has_many :itineraries, dependent: :destroy
end
