class Itinerary < ApplicationRecord
  belongs_to :user
  belongs_to :activity


  
  # has_many :parks, through: :activities


end
