import React, { Component } from 'react';
import './workItemFullView.css';

class WorkItemFullView extends Component {
  
  render() {
    return (
      <div className="workItemFullView">
          <h1>{this.props.title}</h1>
          <img src={this.props.imageUrl} className="workItemFullViewImage"/>
          <div className="workItemFullViewDescription">{this.props.description}</div>
      </div>
    );
  }
}

export default WorkItemFullView;