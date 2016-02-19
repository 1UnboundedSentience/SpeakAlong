require 'rails_helper'

describe Video, js: true do
  describe "back buttons" do
    context "go back to original page" do
       it "logs in" do
        visit "/"
        within('#signup-form') do
          fill_in('First Name', :with => 'Jason')
          sleep 0.5
          fill_in('Last Name', :with => 'Xu')
          sleep 0.5
          fill_in('E-mail', :with => 'c@c.com')
          sleep 0.5
          fill_in('Username', :with => 'Jason')
          sleep 0.5
          fill_in('Password', :with => 'Secret12')
          sleep 0.5
          #binding.pry
          click_button('Save User')
        end
      end
    end
  end
  describe "back button works on videos show" do

  end
end