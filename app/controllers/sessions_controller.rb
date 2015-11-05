class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email].downcase)

    p @user && @user.password === params[:password]
    if @user && @user.password === params[:session][:password]
      auth_login(@user)
      p "logging in"
      redirect_to @user
    else
      @error = "incorrect login"
      render '/users/index'
    end
  end

  def destroy
    auth_logout
    redirect_to '/'
  end

  private

  def article_params
    params.require(:user).permit(:first_name,:last_name,:username,:password,:email)
  end
end
