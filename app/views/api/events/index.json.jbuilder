json.events do
  @events.each do |event|
    json.set! event.id do
      json.id event.id
      json.eventTitle event.description
      json.date event.date
      json.startTime event.start
      json.endTime event.end
      json.startDateTime event.start_time
      json.endDateTime event.end_time
    end
  end
end
