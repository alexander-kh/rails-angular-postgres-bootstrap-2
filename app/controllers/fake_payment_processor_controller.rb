class FakePaymentProcessorController < ApplicationController
  def show
    sleep 2
    render json: {
      credit_card_info: {
        cardholder_id: params[:id],
        last_four: Faker::Business.credit_card_number[-4..-1],
        expiration_month: Faker::Business.credit_card_expiry_date.month,
        expiration_year: Faker::Business.credit_card_expiry_date.year,
        type: Faker::Business.credit_card_type,
        link: Faker::Internet.url,
      }
    }
  end
end