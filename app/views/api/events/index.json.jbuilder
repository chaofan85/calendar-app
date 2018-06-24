json.events do
  @events.each do |event|
    json.set! comment.id do
      json.id event.id
      json.eventTitle event.description
      json.startTime event.start_time
      json.endTime event.end_time
    end
  end
end
