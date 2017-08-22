import React, { Component } from 'react';
import './workItem.css';

class WorkItem extends Component {
  
  render() {
    return (
      <div className="" onClick={() => this.props.onWorkItemSelected(this)}>
          <img src={this.props.imageUrl} className="" />
          <div>{this.props.title}</div>
      </div>
    );
  }
}

export default WorkItem;