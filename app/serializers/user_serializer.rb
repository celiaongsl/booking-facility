class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email

  has_many :bookings
  has_many :rooms, through: :bookings
end
