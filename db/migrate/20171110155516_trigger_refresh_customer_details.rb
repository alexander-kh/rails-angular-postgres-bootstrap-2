class TriggerRefreshCustomerDetails < ActiveRecord::Migration[5.1]
  def up
    execute %{
      CREATE OR REPLACE FUNCTION
        refresh_customer_details()
        RETURNS TRIGGER LANGUAGE PLPGSQL
      AS $$
      BEGIN
        REFRESH MATERIALIZED VIEW CONCURRENTLY customer_details;
        RETURN NULL;
      EXCEPTION
        WHEN feature_not_supported THEN
          RETURN NULL;
      END $$;
    }
    %w(customers
       customers_shipping_addresses
       customers_billing_addresses
       addresses).each do |table|
      execute %{
        CREATE TRIGGER refresh_customer_details
          AFTER
            INSERT OR
            UPDATE OR
            DELETE
          ON #{table}
            FOR EACH STATEMENT
              EXECUTE PROCEDURE
                refresh_customer_details()
      }
    end
  end
  
  def down
    %w(customers
       customers_shipping_addresses
       customers_billing_addresses
       addresses).each do |table|
      execute %{DROP TRIGGER refresh_customer_details ON #{table}}
    end
    execute %{DROP FUNCTION refresh_customer_details()}
  end
end
