class Api::UsersController < ApplicationController
  def numofgoals
    goalAuthor = "#{current_user.fname} #{current_user.lname}"
    render json: Goal.where(author: goalAuthor).count
  end

  def update
    current_user.fname = params[:fname] ? params[:fname] : current_user.fname
    current_user.lname = params[:lname] ? params[:lname] : current_user.lname
    current_user.email = params[:email] ? params[:email] : current_user.email
    current_user.age = params[:age] ? params[:age] : current_user.age

    file = params[:file]
    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        current_user.image = cloud_image['secure_url']
        if current_user.save
          render json: current_user
        else
          render json: { errors: current_user.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if current_user.save
        render json: current_user
      else
        render json: { errors: current_user.errors.full_messages }, status: 422
      end
    end

  end

end
