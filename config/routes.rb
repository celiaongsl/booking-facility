# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :bookings
      resources :rooms, param: :slug
      resources :users
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
    end
  end
  
  get '*path', to: 'pages#index', via: :all 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
