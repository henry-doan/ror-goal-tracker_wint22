class Api::GoalsController < ApplicationController
  before_action :set_goal, only: [:show, :update, :destroy]

  def index
    paginate json: Goal.all
  end

  def show
    render json: @goal
  end

  def create
    @goal = Goal.new(goal_params)
    if @goal.save 
      render json: @goal 
    else
      render json: { errors: @goal.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @goal.update(goal_params)
      render json: @goal 
    else
      render json: { errors: @goal.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @goal.destroy
    render json: { message: 'Goal Deleted'}
  end

  private 
    def set_goal
      @goal = Goal.find(params[:id])
    end

    def goal_params
      params.require(:goal).permit(:target, :start_time, :end_time, :img, :author, :complete)
    end
end
