json.events do
  @events.each do |event|
    json.set! event.id do
      json.id event.id
      json.eventTitle event.description
      json.date event.date
      json.startTime event.start
      json.endTime event.end
    end
  end
end
