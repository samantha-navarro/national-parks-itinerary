class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image

  has_many :activities
end
