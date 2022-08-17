class ActivitiesController < ApplicationController


    def index
        if params[:park_id]
            activities = Activity.where park_id: params[:park_id]
        else
            activities = Activity.all
        end
        render json: activities, status: :ok
    end

    # GET "/actitivies/:id"
    #Fetch this route when trying to view the details of a specific Activity
    def show
        activity = Activity.find(params[:id])
        render json: activity, status: :ok
    end

    # POST "/activities"
    # Fetch this route  when the user creates a new Acivity
    def create
        activity = Activity.find(params[:id])
        render json: activity, status: :created
    end
    

end
