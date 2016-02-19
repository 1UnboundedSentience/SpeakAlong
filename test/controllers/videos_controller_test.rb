require 'test_helper'

class VideosControllerTest < ActionController::TestCase
  require 'capybara/cucumber'
  Capybara.app = MyRackApp
  When /I click the back button on the Videos Show page, I go back to the previous Videos Index Page/ do
    click_button 'Back'
  end

end
