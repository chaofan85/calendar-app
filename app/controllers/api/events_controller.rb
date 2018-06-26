class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

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

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      render :show
    else
      flash.now[:errors] = @event.errors.full_messages
    end
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
