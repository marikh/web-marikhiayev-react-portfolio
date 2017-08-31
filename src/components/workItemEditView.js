import React, { Component } from 'react';
import WorkItemForm from './workItemForm';
import ListItemChangeType from '../common/constants/listItemChangeType';
import PropTypes from 'prop-types';

class WorkItemEditView extends Component {

    handleSubmit(newItem){
      this.props.workItemsChangeRequested(ListItemChangeType.Modified, newItem);
    }

  render() {
    return <WorkItemForm  id={this.props.id}
                              title={this.props.title} 
                              imageUrl={this.props.imageUrl}
                              description={this.props.description}
                              
                              handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

WorkItemEditView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired, 
  description:PropTypes.string,
  workItemsChangeRequested : PropTypes.func.isRequired
}

export default WorkItemEditView;