class ItinerariesController < ApplicationController

    def index
        itineraries = Itinerary.where(user_id: session[:user_id])
        render json: itineraries, status: :ok
    end

    def show
        itinerary = Itinerary.find(params[:id])
        render json: itinerary, status: :ok
    end

    def create
        itinerary = Itinerary.create!(itinerary_params)
        render json: itinerary, render: :created
    end

    def destroy
        user = Itinerary.find(params[:id])
        user.destroy
        head :no_content
    end


    private

    def itinerary_params
        params.permit(:date, :user_id, :activity_id)
    end

end
