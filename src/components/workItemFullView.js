import React, { Component } from 'react';
import './workItemFullView.css';

class WorkItemFullView extends Component {
  
  render() {
    return (
      <div className="workItemFullView">
          <h1>{this.props.title}</h1>
          <div>{this.props.description}</div>
          <img src={this.props.imageUrl} className="" />
      </div>
    );
  }
}

export default WorkItemFullView;