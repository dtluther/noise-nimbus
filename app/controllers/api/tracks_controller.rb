class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find_by(title: params[:title])
    if @track
      render "api/tracks/show"
    else
      render json: ["Track does not exist."], status: 422
    end
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track
      @track.update_attributes(track_params)
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end


  def destroy
    track = Track.find_by(id: params[:id])

    if track && track.artist_id == current_user.id
      track.destroy!
      render track
    else
      render json: ["Track does not exisit/You don't have the authority to delete this track."], status: 422
    end
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
