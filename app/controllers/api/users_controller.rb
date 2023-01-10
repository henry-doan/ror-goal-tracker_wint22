class Api::UsersController < ApplicationController
  def numofgoals
    goalAuthor = "#{current_user.fname} #{current_user.lname}"
    render json: Goal.where(author: goalAuthor).count
  end
end
