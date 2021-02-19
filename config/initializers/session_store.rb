if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_book_a_facility_app", domain: "pretend-i-have-a-heroku-app.com"
else
    Rails.application.config.session_store :cookie_store, key: "_book_a_facility_app"
end