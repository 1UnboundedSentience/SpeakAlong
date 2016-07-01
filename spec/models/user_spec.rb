require 'rails_helper'

RSpec.describe User, type: :model do
    describe "user" do
      it 'create a user in the database' do
        user = User.create() # the user data
        expect(User.count).to eq(1)
      end
end
