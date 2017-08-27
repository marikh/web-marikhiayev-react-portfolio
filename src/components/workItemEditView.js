import React, { Component } from 'react';
import WorkItemFormBase from './workItemFormBase';
import ListItemChangeType from '../common/constants/listItemChangeType';

class WorkItemEditView extends Component {

    handleSubmit(newItem){
      this.props.workItemsChangeRequested(ListItemChangeType.Modified, newItem);
    }

  render() {
    return <WorkItemFormBase  id={this.props.id}
                              title={this.props.title} 
                              imageUrl={this.props.imageUrl}
                              description={this.props.description}
                              
                              handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

export default WorkItemEditView;