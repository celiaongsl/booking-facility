# frozen_string_literal: true

class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :floor
      t.integer :capacity
      t.string :room_type
      t.json :assets, null: false, default: '{}'
      t.string :slug

      t.timestamps
    end
  end
end
