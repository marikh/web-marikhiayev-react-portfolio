import React, { Component } from 'react';
import WorkItemFormBase from './workItemFormBase';
import ListItemChangeType from '../common/constants/listItemChangeType';

class WorkItemAddView extends Component {

    handleSubmit(newItem){
      newItem["id"] = newItem["title"];
      this.props.workItemsChangeRequested(ListItemChangeType.New, newItem);
    }

  render() {
    return <WorkItemFormBase handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

export default WorkItemAddView;