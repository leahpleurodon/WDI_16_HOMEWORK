Hogwarts::Application.routes.draw do
  
  resources :houses, only: [:index, :show]
  resources :students, except: [:edit, :destroy, :update]
  root "houses#index"
  get "/welcome/student/:id", to: "students#welcome"

end
