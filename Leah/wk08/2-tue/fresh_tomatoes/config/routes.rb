Rails.application.routes.draw do

  get '/movies/:imdb_id', to: "movies#show"

  get '/movies/:id/edit', to: "movies#edit"

  delete '/movies/:id', to: "movies#destroy"

  put '/movies/:id', to: "movies#update"

  get '/' , to: "pages#home"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
