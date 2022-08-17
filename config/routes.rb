Rails.application.routes.draw do
  
  resources :itineraries, only: [:index, :show, :destroy]
  resources :activities, only: [:index, :show, :create, :destroy]
  resources :parks, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]

  #custom routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/mainpage", to: "sessions#show"

  # get"/cookie_click, to: "sessions#click"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
