import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEvent } from '../actions/event_actions';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.event.id,
      eventTitle: props.event.eventTitle.substring(0),
      startTime: props.event.startDateTime.substring(0, 19),
      endTime: props.event.endDateTime.substring(0, 19)
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
    this.props.updateEvent(event).then(evt => {
      this.props.clickOutsideToCloseEdit(evt);
    });
  }

  deleteEvent() {}

  render() {
    return (
      <div className="event-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Edit Event"
              defaultValue={this.state.eventTitle}
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

          <input type="submit" value={this.props.edit ? 'Update' : 'Add'} />
          <div class="delete-event" onClick={this.deleteEvent}>
            DELETE
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEvent: event => dispatch(updateEvent(event))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditForm);
