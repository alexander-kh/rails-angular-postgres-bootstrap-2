class AddStatusToCustomer < ActiveRecord::Migration[5.1]
  def up
    execute %{ CREATE TYPE
               customer_status
               AS ENUM
               ('signed_up', 'verified', 'inactive')
             }
    add_column :customers, :status, "customer_status",
               default: "signed_up", null: false
  end
  def down
    remove_column :customers, :status
    execute %{
      DROP TYPE customer_status
    }
  end
end
