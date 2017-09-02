import React, { Component } from 'react';
import WorkItem from '../workItem/workItem';
import ComponentNames from '../../common/constants/componentNames';
import './workItems.css';
import PropTypes from 'prop-types';
import ComponentsStateStore from '../../common/componentsStateStore';

class WorkItems extends Component {

    componentDidMount(){

        if(this.props.data == null){
            this.initializeComponentData();
        }
    }

    initializeComponentData(){
        fetch('/data/portfolioItems.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
      
            const componentsStateStore = new ComponentsStateStore();
            const workItemsFechedState =  { items: json };
            componentsStateStore.store(ComponentNames.WorkItems, workItemsFechedState);
        });
    }

  onDeleteWorkItem(workItemId){

    const componentsStateStore = new ComponentsStateStore();
    const indexOfItemToDelete =  this.props.data.items.map(item => item.id).indexOf(workItemId);
    const updatedWorkItemsArray = [...this.props.data.items.slice(0, indexOfItemToDelete), ...this.props.data.items.slice(indexOfItemToDelete + 1)];
    componentsStateStore.store(ComponentNames.WorkItems, { items: updatedWorkItemsArray});
  }

  render() {
    return this.props.data && (
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

WorkItems.propTypes =  {
    id : PropTypes.string,
    title : PropTypes.string,
    data : PropTypes.shape({ items: PropTypes.array }),
    navigateToView : PropTypes.func.isRequired
}

export default WorkItems;