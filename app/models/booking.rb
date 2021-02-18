class Booking < ApplicationRecord
    # A booking should only have 1 room and 1 user
    belongs_to :user
    belongs_to :room

    validate :bookings_must_not_overlap

    # private

    def bookings_must_not_overlap
        return if self
                    .class
                    .where.not(id: id)
                    .where(room_id: room_id)
                    .where('start_timestamp < ? AND end_timestamp > ?', end_timestamp, start_timestamp)
                    .none?

        errors.add(:messages, 'Overlapping room booking exists')
    end

end
