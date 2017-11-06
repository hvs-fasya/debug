Rails.application.routes.draw do
  
  devise_for :users, :controllers => 
  	{sessions: 'sessions', registrations: 'registrations', confirmations: 'confirmations'}  
  root 'pages#index'
  get 'pages/index'
  get 'german_words', to: 'german_words#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
