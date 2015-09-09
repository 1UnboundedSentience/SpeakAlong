class VideosController < ApplicationController
  #require 'video_info'
  def index
    @videos = Video.all
    # VideoInfo.provider_api_keys = { youtube: 'YOUR_YOUTUBE_API_KEY', vimeo: 'YOUR_VIMEO_API_KEY' }
    @user = User.find(session[:user_id])
  end

  def create
    @user = User.find(params[:user_id])
    p @user
    @videos = Video.all
    @video = @user.videos.new(
      title: params[:title],
      user_id: params[:user_id],
      video_link: params[:video_link]
    )
    p @video
    if @video.save
      redirect_to user_video_path(@user, @video)
    else
      render 'index'
    end
  end

  def show
    @video = Video.find(params[:id]) #the video id
    @user = User.find(session[:user_id])
  end

  def edit

  end

end
