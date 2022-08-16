class ParksController < ApplicationController

    def index
        parks = Park.all
        render json: parks, status: :ok
    end

    # GET "/parks/:id"
    # Fetch this route when trying to view the details of a specific Park.

    def show
        park = Park.find(params[:id])
        render json: park, status: :ok
    end

end
