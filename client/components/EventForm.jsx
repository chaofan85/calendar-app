import React, { Component } from 'react';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventTitle: '',
      startTime: `${this.props.year}-${this.props.month}-${
        this.props.date
      }T${new Date().getHours() + 1}:00`,
      endTime: `${this.props.year}-${this.props.month}-${
        this.props.date
      }T${new Date().getHours() + 2}:00`
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
  }

  handleEventChange(e) {
    this.setState({ eventTitle: e.target.value });
  }

  handleStartTimeChange(e) {
    this.setState({ startTime: e.target.value });

    console.log(this.state.startTime);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.eventTitle);
  }

  render() {
    return (
      <div className="event-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add New Event"
              onChange={this.handleEventChange}
              autoFocus
            />
          </div>
          <div>
            <input
              type="datetime-local"
              defaultValue={this.state.startTime}
              onChange={this.handleStartTimeChange}
            />
          </div>
          <div>
            <input type="datetime-local" defaultValue={this.state.endTime} />
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EventForm;
