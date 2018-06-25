import React, { Component } from 'react';

class EventItem extends Component {
  render() {
    console.log(this.props.event);
    return <div className="event-item">lalala</div>;
  }
}

export default EventItem;
