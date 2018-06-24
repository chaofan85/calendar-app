p 'lololo'
json.event do
  json.description @event.description
  json.startTime @event.start_time
  json.endTime @event.end_time
end
