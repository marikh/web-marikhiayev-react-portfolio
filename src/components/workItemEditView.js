import React, { Component } from 'react';
import './workItemEditView.css';

class WorkItemEditView extends Component {
  
  render() {
    return (
      <div className="workItemEditView">
          <img src={this.props.imageUrl} className="" />
          <div>{this.props.title}</div>
          <div>{this.props.description}</div>
      </div>
    );
  }
}

export default WorkItemEditView;