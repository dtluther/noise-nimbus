class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    puts params
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:username])

    if @user
      render "api/users/show"
    else
      render json: ["User does not exist."], status: 422
    end
  end

  def omnisearch
    @users = User.where("LOWER(username) LIKE ?", "%#{params[:query]}%".downcase).limit(5)
    @tracks = Track.where("LOWER(title) LIKE ?", "%#{params[:query]}%".downcase).limit(5)
    render 'api/omnisearch'
  end

  def user_params
    params.require(:user)
      .permit(
        :email,
        :first_name,
        :username,
        :password,
        :image
    )
  end
end
