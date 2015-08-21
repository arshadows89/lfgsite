Rails.application.routes.draw do
  
  root 'home#index'

  post '/guildupdate', to: 'home#guildupdate'

  get '/guildform', to: 'home#guildform'

  resources :guilds

end
