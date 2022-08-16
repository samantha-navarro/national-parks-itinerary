class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities, status: :ok
    end

    # GET "/actitivies/:id"
    #Fetch this route when trying to view the details of a specific Activity
    def show
        activity = Activity.find(params[:id])
        render json: activity, status: :ok
    end

end
