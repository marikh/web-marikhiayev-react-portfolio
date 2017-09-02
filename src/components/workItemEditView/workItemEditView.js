import React, { Component } from 'react';
import WorkItemForm from '../workItemForm/workItemForm';
import PropTypes from 'prop-types';
import ComponentsStateStore from '../../common/componentsStateStore';
import ComponentNames from '../../common/constants/componentNames';

class WorkItemEditView extends Component {

    handleSubmit(newItem){

      const componentsStateStore = new ComponentsStateStore();
      let workItemsState = componentsStateStore.getState(ComponentNames.WorkItems);
      let itemToUpdate = workItemsState.items.find(workItem => workItem.id === newItem.id);
      Object.assign(itemToUpdate, newItem);

      const indexOfItemToUpdate =  workItemsState.items.indexOf(itemToUpdate);
      const updatedWorkItemsArray = [...workItemsState.items.slice(0, indexOfItemToUpdate), itemToUpdate, ...workItemsState.items.slice(indexOfItemToUpdate + 1)];
      componentsStateStore.store(ComponentNames.WorkItems, { items: updatedWorkItemsArray });
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
  description:PropTypes.string
}

export default WorkItemEditView;