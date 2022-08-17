class ItinerariesController < ApplicationController

    def index
        itineraries = Itinerary.all
        render json: itineraries, status: :ok
    end

    def show
        itinerary = Itinerary.find(params[:id])
        render json: itinerary, status: :ok
    end

    def create
        
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
end
