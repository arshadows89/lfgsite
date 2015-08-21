class CreateGuilds < ActiveRecord::Migration
  def change
    create_table :guilds do |t|
      t.string :battletag
      t.string :email
      t.string :charname
      t.string :armory
      t.string :charclass
      t.string :level
      t.string :role
      t.string :spec

      t.timestamps null: false
    end
  end
end
