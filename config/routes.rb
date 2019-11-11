Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  resources :posts do
    get 'current_user_posts', on: :collection
    get 'agenda', on: :collection
  end
  root 'posts#index'
  match '*path' => redirect('/'), via: :get

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
