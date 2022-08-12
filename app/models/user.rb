class User < ApplicationRecord
    has_many :activities;
    has_many :itineraries, through: :activities;

end
