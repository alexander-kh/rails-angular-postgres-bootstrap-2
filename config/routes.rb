Rails.application.routes.draw do
  devise_for :users
  root to: "dashboard#index"
  # These supercede other /customers routes, so must
  # come before resource :customers
  get "customers/ng",                to: "customers#ng"
  get "customers/ng/*angular_route", to: "customers#ng"
  resources :customers, only: [ :index, :show, :update ]
  get "credit_card_info/:id", to: "fake_payment_processor#show"
end
