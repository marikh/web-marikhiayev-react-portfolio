import React, { Component } from 'react';
import './workItem.css';
import {Button} from "react-bootstrap";

class WorkItem extends Component {

  onWorkItemSelected(e){
    e.stopPropagation();
    this.props.navigateToView("WorkItemFullView", this.props);
  }

  onWorkItemEdit(e){
    e.stopPropagation();  // prevent from onWorkItemSelected to be called
    this.props.navigateToView("WorkItemEditView", this.props);
  }

  onWorkItemDelete(e){
    e.stopPropagation();
    this.props.onDeleteWorkItem(this.props.id);
  }

  render() {
    return (
      <div className="workItem" onClick={(e) => this.onWorkItemSelected(e)}>
          <img src={this.props.imageUrl} className="workItemImage" />
          <div className="sepereationLineAndTitle">
            <div className="seperationLineBetweenWorkItemImageToTitle" />
            <div className="workItemTitle">{this.props.title}</div>
          </div>
          <Button bsSize="xsmall" bsStyle="primary" className="workItemEditButton" id="edit-button"onClick={(e) => this.onWorkItemEdit(e)}>Edit</Button>
          <Button bsSize="xsmall" bsStyle="danger" className="workItemDeleteButton" id="remove-button" onClick={(e) => this.onWorkItemDelete(e)}>Remove</Button>
      </div>
    );
  }
}

export default WorkItem;