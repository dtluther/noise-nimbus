class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    track = Track.find_by(id: params[:id])
    track.destroy!
    render track
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render "api/tracks/show"
    else
      render json: ["Track does not exist."], status: 422
    end
  end

  def index
  end

  def track_params
    params.require(:track)
      .permit(
        :title,
        :genre,
        :user_id,
        :track_upload
      )
  end
end
