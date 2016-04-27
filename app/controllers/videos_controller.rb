class VideosController < ApplicationController
  def index
    @videos = Video.all
    # VideoInfo.provider_api_keys = { youtube: 'YOUR_YOUTUBE_API_KEY', vimeo: 'YOUR_VIMEO_API_KEY' }
    @users = User.all
    @user = User.find(session[:user_id])
  end

  def create
    @user = User.find(params[:user_id])
    # p @user
    # @video = Video.new(user_video_params)
    # @videos = Video.all
    @video = @user.videos.new(
      title: params[:video][:title],
      user_id: params[:user_id],
      video_link: params[:video][:video_link]
    )
    if @video.save
      redirect_to user_video_path(@user, @video)
    else
      render 'index'
    end
  end

  def show
    params[:video_id] = params[:id]
    @video = Video.find(params[:id]) #the video id
    @user = User.find(session[:user_id])
    @reviews = Review.where(video_id: @video.id)
    @review = Review.new()
  end

  def edit
    @video = Video.find(params[:id]) #the video id
    @user = User.find(session[:user_id])
  end

  def update
    @video = Video.find(params[:id]) #the video id
    @user = User.find(session[:user_id])
    @video.update(
      title: params[:video][:title],
      user_id: params[:user_id],
      video_link: params[:video][:video_link]
    )
    redirect_to user_video_path(@user, @video)
  end

  def destroy
    @video = Video.find(params[:id])
    @user = User.find(session[:user_id])
    @video.destroy
    redirect_to user_videos_path(@user)
  end

  private

  def video_params
    params.require(:video).permit(:title,
:user, :video_link)
  end
end


