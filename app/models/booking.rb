class Booking < ApplicationRecord
    # A booking should only have 1 room and 1 user
    belongs_to :user
    belongs_to :room
end
