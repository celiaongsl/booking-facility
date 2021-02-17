class BookingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :start_timestamp, :end_timestamp, :user_id, :room_id
end
