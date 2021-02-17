# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      # for now I don't want to do destroy for bookings
      resources :bookings
      resources :rooms, param: :slug
      resources :users
    end
  end
  
  get '*path', to: 'pages#index', via: :all 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
