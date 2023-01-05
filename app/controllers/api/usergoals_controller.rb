class Api::UsergoalsController < ApplicationController
  before_action :set_usergoals, only: [:show, :update, :destroy]

  def index
    render json: current_user.usergoals
  end

  def show
    render json: @usergoal
  end

  def create
    @usergoal = current_user.usergoals.new(usergoals_params)
    if @usergoal.save
      render json: @usergoal
    else
      render json: { errors: @usergoal.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @usergoal.update(usergoals_params)
      render json: @usergoal
    else
      render json: { errors: @usergoal.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @usergoal.destroy
    render json: { message: 'User goal Deleted'}
  end

  private
    def set_usergoals
      @usergoal = current_user.usergoals.find(params[:id])
    end

    def usergoals_params
      params.require(:usergoal).permit(:entry, :when, :goal_id)
    end
end
