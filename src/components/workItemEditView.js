import React, { Component } from 'react';
import WorkItemForm from './workItemForm';
import ListItemChangeType from '../common/constants/listItemChangeType';

class WorkItemEditView extends Component {

    handleSubmit(newItem){
      this.props.workItemsChangeRequested(ListItemChangeType.Modified, newItem);
    }

  render() {
    return <WorkItemForm  id={this.props.id}
                              key={this.props.key}
                              title={this.props.title} 
                              imageUrl={this.props.imageUrl}
                              description={this.props.description}
                              
                              handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

export default WorkItemEditView;