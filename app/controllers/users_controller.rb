class UsersController < ApplicationController
   #  skip_before_action :authentication_user


    #GET "/users"
    # Fetch this route to see a list of all users that currently have an account

    def index
        users = User.all
        render json: users, status: :ok
    end

     # GET "/users/:id"
     #  might need serializer to fetch itineraries
     
   #   def show
   #      user = User.find(params[:id])
   #      render json: user, status: :ok
   #   end

   def show
      user = User.find_by(id: session[:user_id])
      if user 
         render json: user
      else
         render json: { error: "Not authorized" }, status: :unauthorized
      end
   end



     #POST "/users"
     # Fetch this route to create a user (see user params to know what's required in the form)

     def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        #error: unprocessable_entity in app controller
     end

    # DESTROY "/users/:id"
    # Delete account (user) in account settings

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

     private
     # ERRORS FOR INVALIDE AND RECORD NOT FOUND ARE IN APP CONTROLLER
     def user_params
        params.permit(:username, :password, :full_name, :email)
     end
     
end
