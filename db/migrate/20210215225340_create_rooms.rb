# frozen_string_literal: true

class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :floor
      t.integer :capacity
      t.string :type

      t.timestamps
    end
  end
end
