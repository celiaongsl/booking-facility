# frozen_string_literal: true

class Room < ApplicationRecord
  has_many :bookings
  has_many :users, through: :bookings

  before_create :slugify 

  # consider adding a slug for urls
  def slugify
    self.slug = name.parameterize
  end
end
