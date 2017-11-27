class AddSettings < ActiveRecord::Migration[5.1]
  def change
    enable_extension :hstore
    add_column :users, :settings, :hstore, default: {}
  end
end
