class Event < ApplicationRecord
  validates :description, :start_time, :end_time, presence: true

  def date
    self.start_time.to_date
  end

end
