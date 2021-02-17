module Api
    module V1 
        class BookingsController < ApplicationController
            # the initial show
            def index
                bookings = Booking.all
                render json: BookingSerializer.new(bookings).serialized_json
            end 

            # Show booking based on booking_id?
            def show
                booking = Booking.find(params[:id])
                render json: BookingSerializer.new(booking).serialized_json
            end

            def create 
                booking = Booking.new(booking_params)
                if booking.save
                    render json: BookingSerializer.new(booking).serialized_json
                else
                    render json: {error: booking.errors.messages}, status: 422
                end
            end

            # If I have the time, I would try out an "update" booking

            def destroy
                booking = Booking.find(params[:id])

                if booking.destroy 
                    head :no_content
                else
                    render json: { error: booking.errors.messages}, status: 422
                end
            end

            private
            def booking_params
                params.require(:booking).permit(:title, :description, :start_timestamp, :end_timestamp, :user_id, :room_id)
            end

            # def options
            #     @options ||= { include: %i[users, rooms]}
            # end
        end
    end
end