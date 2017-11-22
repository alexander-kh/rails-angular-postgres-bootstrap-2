require 'rails_helper'
require 'support/violate_check_constraint_matcher'

describe User do
  describe "email" do
    let(:user) {
      User.create!(email: "test@example.com",
                   password: "password123",
                   password_confirmation: "password123")
    }
    it "absolutely prevents invalid email addresses" do
      expect {
        user.update_attribute(:email, "test@somewhere.net")
      }.to violate_check_constraint(:email_must_be_company_email)
    end
  end
end