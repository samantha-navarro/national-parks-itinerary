class ParksController < ApplicationController

    def index
        parks = Park.all
        render json: parks, status: :ok
    end

    
end
