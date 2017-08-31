import React, { Component } from 'react';
import './workItem.css';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import ComponentNames from '../../common/constants/componentNames';

class WorkItem extends Component {

  onWorkItemSelected(e){
    e.stopPropagation();
    this.props.navigateToView(ComponentNames.WorkItemFullView, this.props);
  }

  onWorkItemEdit(e){
    e.stopPropagation();  // prevent bubbling (prevent calling onWorkItemSelected)
    this.props.navigateToView(ComponentNames.WorkItemEditView, this.props);
  }

  onWorkItemDelete(e){
    e.stopPropagation();
    this.props.onDeleteWorkItem(this.props.id);
  }

  render() {
    return (
      <div className="workItem" onClick={(e) => this.onWorkItemSelected(e)}>
          <img src={this.props.imageUrl} className="workItemImage" alt=""/>
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

WorkItem.propTypes =  {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired, 
  description:PropTypes.string,
  navigateToView : PropTypes.func.isRequired,
  onDeleteWorkItem : PropTypes.func.isRequired,
  workItemsChangeRequested : PropTypes.func.isRequired
}

export default WorkItem;