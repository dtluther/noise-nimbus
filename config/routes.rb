Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:new, :edit]

    get '/omnisearch', to: "users#omnisearch"
  end

  get 'api/users/:username', to: 'api/users#show', defaults: {format: :json}
  get 'api/tracks/by_title/:title', to: 'api/tracks#show', defaults: { format: :json};

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
