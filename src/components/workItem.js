import React, { Component } from 'react';
import './workItem.css';

class WorkItem extends Component {
  
  onWorkItemSelected(e){
    e.stopPropagation();
    this.props.navigateToView("WorkItemFullView", this.props);
  }

  onWorkItemEdit(e){
    e.stopPropagation();
    this.props.navigateToView("WorkItemEditView", this.props);
  }

  onWorkItemDelete(e){
    e.stopPropagation();
    this.props.onDeleteWorkItem(this.props.id);
  }

  render() {
    return (
      <div className="" onClick={(e) => this.onWorkItemSelected(e)}>
          <img src={this.props.imageUrl} className="" />
          <div>{this.props.title}</div>
          <button id="edit-button"onClick={(e) => this.onWorkItemEdit(e)}>Edit</button>
          <button id="remove-button" onClick={(e) => this.onWorkItemDelete(e)}>Remove</button>
      </div>
    );
  }
}

export default WorkItem;