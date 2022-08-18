Rails.application.routes.draw do
  
  resources :itineraries, only: [:index, :show, :create, :destroy]
  resources :activities, only: [:index, :show, :create, :destroy]
  resources :parks, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]

  #custom routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/main", to: "sessions#show"
  get "/parks/:park_id/activities", to: "activities#index"

  # get"/cookie_click, to: "sessions#click"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
