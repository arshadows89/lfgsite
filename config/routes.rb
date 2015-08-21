Rails.application.routes.draw do
  
  root 'home#index'

  post '/guildupdate', to: 'home#guildupdate'

  resources :guilds

end
