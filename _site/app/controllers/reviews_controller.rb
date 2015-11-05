class ReviewsController < ApplicationController
  def index
    @videos = Video.find(params[:video_id])
  end

  def show

  end

  def create
    Review.create(review_params)
    redirect_to user_video_path(params[:user_id], params[:video_id])
  end

  def update
    Review.update(review_params)
    redirect_to user_video_path(params[:user_id], params[:video_id])
  end

  private
    def review_params
      params.require(:review).permit(:user_id, :video_id, :body_lang_rating, :body_lang_comments, :vocal_rating, :vocal_comments, :content_rating, :content_comments, :overall_rating, :overall_comments)
    end
end
