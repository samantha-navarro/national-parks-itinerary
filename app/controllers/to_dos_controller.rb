class ToDosController < ApplicationController

    def update
        todo = Todo.find(params[:id])
        # todo.update!(todo_params)
        todo.update_attributes!(todo_params)
        render json: todo, status: :accepted
    end

    def create
        new_todo = ToDo.create!(todo_params)
        render json: new_todo, status: :created
    end

    def destroy
        todo = Todo.find(params[:id])
        todo.destroy
        head :no_content
    end

    private
    def todo_params
        params.permit(:id, :task, :complete)
    end

end
