class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
  has_one :activity
  has_many :todos
end
