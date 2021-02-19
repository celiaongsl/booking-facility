module Api 
    module V1
        class SessionsController < ApplicationController
            include CurrentUserConcern

            def create
                # If you don't want user to wrap email when calling the API, you can remove it
                user = User
                    .find_by(email: params["user"]["email"])
                    .try(:authenticate, params["user"]["password"])
                if user 
                    #store user_id and encrypt into client to implement cookie
                    session[:user_id] = user.id
                    render json: {
                        status: :created,
                        logged_in: true,
                        user: user
                    }
                else
                    render json: {
                        status: 401 # universal unauthorized code
                    }
                end
            end

            # This is a GET request
            def logged_in
                # check if current user is available
                if @current_user
                    render json: { # if logged in, here's their user account
                        logged_in: true,
                        user: @current_user
                    }
                else 
                    render json: {
                        logged_in: false
                    }
                end
            end

            def logout
                reset_session
                render json: {
                    status: 200,
                    logged_out: true
                }
            end
        end
    end
end
