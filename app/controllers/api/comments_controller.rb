class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all
  end

  # def show
  #   @comment = Comment.find_by(id: params[:id])
  #
  #   if @comment
  #     render 'api/comments/show'
  #   else
  #     render json: ["Comment does not exist."], status: 404
  #   end
  # end

  def destroy
    comment = Comment.find_by(id: params[:id])

    if comment && comment.user_id == current_user.id
      comment.destroy!
      render comment
    else
      render json: ["Not your comment/unable to delete."], status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :author_id, :track_id)
  end
end
