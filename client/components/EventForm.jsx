import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/event_actions';

class EventForm extends Component {
  constructor(props) {
    super(props);

    let hour = new Date().getHours();
    let startHour = hour + 1 >= 24 ? hour - 23 : hour;
    let endHour = hour + 2 >= 24 ? hour - 22 : hour;

    this.state = {
      eventTitle: '',

      startTime: `${this.props.year}-${this.props.month}-${this.props.date}T${
        startHour >= 10 ? '' : '0'
      }${startHour}:00`,

      endTime: `${this.props.year}-${this.props.month}-${this.props.date}T${
        endHour >= 10 ? '' : '0'
      }${endHour}:00`
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
  }

  handleEventChange(e) {
    this.setState({ eventTitle: e.target.value });
  }

  handleStartTimeChange(e) {
    this.setState({ startTime: e.target.value });
  }

  handleEndTimeChange(e) {
    this.setState({ endTime: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.addEvent(event).then(e => {
      this.props.clickOutsideToClose(e);
    });
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
              className="start-time"
              type="datetime-local"
              defaultValue={this.state.startTime}
              onChange={this.handleStartTimeChange}
            />
          </div>
          <div>
            <input
              className="end-time"
              type="datetime-local"
              defaultValue={this.state.endTime}
              onChange={this.handleEndTimeChange}
            />
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEvent: event => dispatch(addEvent(event))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventForm);
