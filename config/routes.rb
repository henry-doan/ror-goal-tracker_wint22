Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :goals

    resources :usergoals

    get '/numofgoals', to: 'users#numofgoals'

    resources :users, only: :update

  end


end
