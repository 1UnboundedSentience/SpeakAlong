module ApplicationHelper
  def user_logged_in?
    #binding.pry
    if session[:user_id]
      return true
    else
      return false
    end
  end
end
