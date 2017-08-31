import React, { Component } from 'react';
import WorkItemForm from '../workItemForm/workItemForm';
import ListItemChangeType from '../../common/constants/listItemChangeType';
import PropTypes from 'prop-types';

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

WorkItemAddView.propTypes =  {
  workItemsChangeRequested : PropTypes.func.isRequired
}

export default WorkItemAddView;