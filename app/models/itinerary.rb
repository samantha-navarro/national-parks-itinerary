class Itinerary < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  # belongs_to :parks


end
