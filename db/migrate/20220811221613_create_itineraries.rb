class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.date :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
