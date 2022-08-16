class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    #POST '/'
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user.id] = user.id
            render json: user, status: :created
        else
            render json: "Invalid Credentials",
            status: :unauthorized
        end
    end

    #get logged in user's object
    #GET '/main'
    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end
    
    #DELETE "/"
    def destroy
        session.delete :user_id
        head :no_content
    end
end
