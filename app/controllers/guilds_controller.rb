class GuildsController < ApplicationController

  def new

  end

  def show
  	@guild = Guild.find(params[:id])
  end

  def create
	@guild = Guild.new(guild_params)

	@guild.save
	redirect_to @guild
  end

  private

  def guild_params
  	params.require(:guild).permit(:email, :armory, :charname, :battletag, :level, :spec, :charclass, :role)
  end

end
