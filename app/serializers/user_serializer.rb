class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :email

  has_many :activities

end
