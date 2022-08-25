class TodoSerializer < ActiveModel::Serializer
  attributes :id, :task, :complete

  has_one :itinerary
end
