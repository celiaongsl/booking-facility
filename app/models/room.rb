# frozen_string_literal: true

class Room < ApplicationRecord
  has_many :users, through: :bookings

  before_action :set_room, only: [:show]
  # Room only shows/reads data
  # Cannot create, update or delete
  # Trying to add pagination
  def index
    @rooms = Room.paginate(page: params[:page], per_page: 10).order('sort ASC')
  end

  def show
    @others = Room.paginate(page: params[:page], per_page: 10).order('sort ASC')
  end

  private

  def set_room
    @room = Room.find(params[:id])
  end
end
