class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image


  has_one :park
end
