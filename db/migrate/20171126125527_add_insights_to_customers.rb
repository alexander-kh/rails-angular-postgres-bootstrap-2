class AddInsightsToCustomers < ActiveRecord::Migration[5.1]
  def change
    add_column :customers, :insights, :json, default: {}
  end
end
