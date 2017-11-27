class SwitchCustomerSettingsToJsonb < ActiveRecord::Migration[5.1]
  def up
    change_column :customers, :insights,
    'jsonb USING CAST(insights AS jsonb)'
  end
  def down
    change_columnn :customers, :insights,
      'json USING CAST(insights AS json)'
  end
end
