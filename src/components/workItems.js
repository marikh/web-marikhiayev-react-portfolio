import React, { Component } from 'react';
import WorkItem from './workItem';
import ComponentsNames from '../common/constants/componentNames';
import './workItems.css';

class WorkItems extends Component {

    static getInitialComponentData(){
        return fetch('/data/portfolioItems.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            return json;
        });
    }

  onDeleteWorkItem(workItemId){

    const indexOfItemToDelete =  this.props.data.items.map(item => item.id).indexOf(workItemId);
    this.props.stateChangeRequested(ComponentsNames.WorkItems, { items: [...this.props.data.items.slice(0, indexOfItemToDelete), ...this.props.data.items.slice(indexOfItemToDelete + 1)] });
  }

  render() {
    return this.props.data && (//this.props.isShowing &&
      <div className="workItems">
          {
              this.props.data.items.map((item) => 
              <WorkItem {...item} 
              navigateToView={this.props.navigateToView}
              onDeleteWorkItem={this.onDeleteWorkItem.bind(this)}
              /> )
          }
      </div>
    );
  }
}

export default WorkItems;