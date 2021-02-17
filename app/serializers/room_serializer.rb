class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :floor, :capacity, :room_type, :assets, :slug

  has_many :bookings 
  has_many :users, through: :bookings
end
