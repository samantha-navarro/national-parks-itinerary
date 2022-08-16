class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.string :image
      t.belongs_to :park, null: false, foreign_key: true
      t.timestamps
    end
  end
end
