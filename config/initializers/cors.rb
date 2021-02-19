# Whitelist certain domains since we need credentials
# To prevent others from any how accessing

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins "http://localhost:3000"
        resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
    end
    # Repeat as you require more whitelisted domains for production apps
end
