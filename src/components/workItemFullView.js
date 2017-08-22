import React, { Component } from 'react';
import './workItemFullView.css';

class WorkItemFullView extends Component {
  
  render() {
    return (
      <div className="workItemFullView">
          <img src={this.props.imageUrl} className="" />
          <div>{this.props.title}</div>
      </div>
    );
  }
}

export default WorkItemFullView;