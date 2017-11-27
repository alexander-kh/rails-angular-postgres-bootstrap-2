class Customer < ApplicationRecord
  has_many :customers_shipping_address
  
  # Helper to get just the primary shipping address
  def primary_shipping_address
    self.customers_shipping_address.find_by(primary: true).address
  end
  
  has_one :customers_billing_address
  has_one :billing_address, through: :customers_billing_address,
                              source: :address
  
  enum status: {
    signed_up: "signed_up",
     verified: "verified",
     inactive: "inactive",
  }
end
