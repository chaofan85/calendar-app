json.event do
  json.set! @event.id do
    json.id @event.id
    json.description @event.description
    json.date @event.date
    json.startTime @event.start
    json.endTime @event.end
  end
end
