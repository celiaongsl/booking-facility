module Api
    module V1
        class RoomsController < ApplicationController
            # protect_from_forgery with: :null

            # the initial show
            def index
                # def index
                    # @products = Product.filter(params.slice(:floor, :capacity, :room_type))
                  
                # rooms = Room.all
                rooms = Room.filter(params.slice(:floor, :capacity, :room_type,))
                render json: RoomSerializer.new(rooms).serialized_json
            end 

            def show
                # Show based on slug
                room = Room.find_by(slug: params[:slug])
                render json: RoomSerializer.new(room).serialized_json
            end
        end
    end
end
