module Api
    module V1 
        class UsersController < ApplicationController
            def index
                users = User.all
                render json: UserSerializer.new(users).serialized_json
            end

            def show
                # Find based on user_id
                user = User.find(params[:id])
                render json: UserSerializer.new(user).serialized_json
            end
        end
    end
end