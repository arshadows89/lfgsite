class Guild < ActiveRecord::Base
	validates :battletag, presence: true
end
