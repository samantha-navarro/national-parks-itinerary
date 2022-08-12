class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :full_name
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end