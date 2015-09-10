class ReviewsController < ApplicationController
  def index
    @videos = Video.find(params[:video_id])
  end

  def show

  end
end
