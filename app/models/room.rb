# frozen_string_literal: true

class Room < ApplicationRecord
  include Filterable
  has_many :bookings
  has_many :users, through: :bookings

  before_create :slugify 

  # consider adding a slug for urls
  def slugify
    self.slug = name.parameterize
  end

  scope :filter_by_floor, -> (floor) { where floor: floor }
  scope :filter_by_capacity, -> (capacity) { where capacity: capacity }
  scope :filter_by_room_type, -> (room_type) { where("room_type like ?", "#{room_type}%")}
  # scope :filter_by_assets, -> (assets) { where assets: assets}
end
