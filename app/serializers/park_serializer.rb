class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image
end
