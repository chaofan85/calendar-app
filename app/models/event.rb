class Event < ApplicationRecord
  validates :description, :start_time, :end_time, presence: true

  def date
    self.start_time.to_date
  end

  def start
    self.start_time.strftime("%I:%M %p")
  end

  def end
    self.end_time.strftime("%I:%M %p")
  end

end
