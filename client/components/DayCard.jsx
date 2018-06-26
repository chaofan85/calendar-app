import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import EventItem from './EventItem';

class DayCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.renderForm = this.renderForm.bind(this);
    this.clickOutsideToClose = this.clickOutsideToClose.bind(this);
  }

  renderForm() {
    if (!this.state.showForm) {
      document.addEventListener('click', this.clickOutsideToClose, false);
    } else {
      document.removeEventListener('click', this.clickOutsideToClose, false);
    }

    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  clickOutsideToClose(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.renderForm();
  }

  getEvents() {
    let events = [];
    const date = `${this.props.year}-${this.props.month}-${this.props.date}`;

    for (let id in this.props.events) {
      if (this.props.events[id].date === date) {
        events.push(this.props.events[id]);
      }
    }
    return events.map(event => (
      <EventItem
        key={event.id}
        event={event}
        clickOutsideToClose={this.clickOutsideToClose}
      />
    ));
  }

  render() {
    this.getEvents();
    return (
      <div
        className="day-card"
        ref={node => {
          this.node = node;
        }}
      >
        <div>{this.props.date}</div>
        {this.state.showForm && (
          <EventForm
            date={this.props.date}
            month={this.props.month}
            year={this.props.year}
            clickOutsideToClose={this.clickOutsideToClose}
          />
        )}
        <ul className="event-list1">
          {this.props.events ? this.getEvents() : null}
        </ul>
        <div className="add-area" onClick={this.renderForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  null
)(DayCard);
