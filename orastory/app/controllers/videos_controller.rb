class VideosController < ApplicationController
  def index
    @videos = Video.all
    @user = User.find(session[:user_id])
  end

  def show

  end

  def create
    @user = User.find(params[:user_id])
    p @user
    @video = @user.videos.new(
      title: params[:title],
      video_link: params[:video_link]
    )
    p @video
    if @video.save
      redirect_to user_video_path(@user)
    else
      render 'index'
    end
  end
end
