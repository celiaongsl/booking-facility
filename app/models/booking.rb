class Booking < ApplicationRecord
    # A booking should only have 1 room and 1 user
    belongs_to :user
    belongs_to :room

    validate :conflicting_bookings

    def booking_range
        s=Time.local(start_timestamp.year, start_timestamp.month, start_timestamp.day, start_timestamp.hour, start_timestamp.min, start_timestamp.sec)
        e=Time.local(end_timestamp.year, end_timestamp.month, end_timestamp.day, end_timestamp.hour, end_timestamp.min, end_timestamp.sec)
        s..e 
      end
    
    
      private
      def conflicting_bookings
    #     @bookings = Booking.all(:conditions => { :start_timestamp => start_timestamp, :end_timestamp => end_timestamp, :room_id => room_id})
        @bookings = Booking.where(room_id: room_id, start_timestamp: start_timestamp, end_timestamp: end_timestamp)
        # .exists?(conditions = :none)
        # errors.add_to_base("Booking Conflict") if @bookings.any? {|booking| booking.booking_range.overlaps? booking_range}
        errors.add :base, 'Booking Conflict' if @bookings.any? {|booking| booking.booking_range.overlaps? booking_range}
      end

end
