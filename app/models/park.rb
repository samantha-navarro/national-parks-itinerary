class Park < ApplicationRecord
    has_many :activities, dependent: :destroy
end
