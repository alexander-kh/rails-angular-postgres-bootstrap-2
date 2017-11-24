class CustomerDetail < ApplicationRecord
  self.primary_key = 'customer_id'
  
  def cardholder_id
    self.customer_id
  end
  
  def serializable_hash(options = nil)
    super.merge({ cardholder_id: cardholder_id })
  end
end