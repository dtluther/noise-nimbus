Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:new, :edit]
  end

  get 'api/tracks/by_title/:title', to: 'api/tracks#show', defaults: { format: :json};

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
