class UsersController < ApplicationController
  def index

    # p auth_logged_in?
    # p auth_logout
    # p auth_current_user
  end

  def create
    @user = User.new(user_params)
    @user.save
    auth_login(@user)
    redirect_to @user
  end

  def show
    @user = User.find(params[:id])
  end

  def update #log out the user

  end


  private

  def user_params
    params.require(:user).permit(:first_name,:last_name,:username,:password,:email)
  end
end
