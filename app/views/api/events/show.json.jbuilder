json.event do
  json.set! @event.id do
    json.id @event.id
    json.description @event.description
    json.date @event.date
    json.startTime @event.start_time
    json.endTime @event.end_time
  end
end
