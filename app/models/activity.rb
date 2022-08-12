class Activity < ApplicationRecord
  belongs_to :park
  
  has_many :itineraries
end
