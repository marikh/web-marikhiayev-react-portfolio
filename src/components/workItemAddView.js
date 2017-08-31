import React, { Component } from 'react';
import WorkItemForm from './workItemForm';
import ListItemChangeType from '../common/constants/listItemChangeType';

class WorkItemAddView extends Component {

    handleSubmit(newItem){
      this.props.workItemsChangeRequested(ListItemChangeType.New, newItem);
    }

  render() {
    return <WorkItemForm 
        title=""
        imageUrl=""
        description=""
    
        handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

export default WorkItemAddView;