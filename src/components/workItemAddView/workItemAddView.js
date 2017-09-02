import React, { Component } from 'react';
import WorkItemForm from '../workItemForm/workItemForm';
import ComponentsStateStore from '../../common/componentsStateStore';
import ComponentNames from '../../common/constants/componentNames';

class WorkItemAddView extends Component {

    handleSubmit(newItem){

      const componentsStateStore = new ComponentsStateStore();
      let workItemsState = componentsStateStore.getState(ComponentNames.WorkItems);

      const itemsKeys = workItemsState.items.map(workItem => workItem.key);
      const newId = Math.max(...itemsKeys) + 1;
      newItem["id"] = newId.toString();
      newItem["key"] = newId;
      workItemsState.items.push(newItem);

      componentsStateStore.store(ComponentNames.WorkItems, workItemsState);
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