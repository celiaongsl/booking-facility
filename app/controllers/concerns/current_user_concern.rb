module CurrentUserConcern
    extend ActiveSupport::Concern
    included do
        before_action :set_current_user
    end

    # Simply check if we have a user_id inside session
    # If we do then ok! Verified, can query the user and 
    # any methodd in the entire application can use 
    def set_current_user
        if session[:user_id]
            @current_user = User.find(session[:user_id])
        end
    end
end