class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.start_time = @event.start_time.to_datetime
    @event.end_time = @event.end_time.to_datetime

    if @event.save
      render :show
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

  private

  def event_params
    params.require(:event).permit(:description, :start_time, :end_time)
  end
end
