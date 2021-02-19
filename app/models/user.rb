class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :rooms, through: :bookings

    validates_presence_of :email 
    validates_uniqueness_of :email 
end
