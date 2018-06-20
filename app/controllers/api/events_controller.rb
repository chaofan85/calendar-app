class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    render :show
  end
end
