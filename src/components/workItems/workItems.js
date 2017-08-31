import React, { Component } from 'react';
import WorkItem from '../workItem/workItem';
import ComponentNames from '../../common/constants/componentNames';
import './workItems.css';
import PropTypes from 'prop-types';

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
    this.props.stateChangeRequested(ComponentNames.WorkItems, { items: [...this.props.data.items.slice(0, indexOfItemToDelete), ...this.props.data.items.slice(indexOfItemToDelete + 1)] });
  }

  render() {
    return this.props.data && (
      <div className="workItems">
          {
              this.props.data.items.map((item) => 
              <WorkItem {...item} 
              navigateToView={this.props.navigateToView}
              workItemsChangeRequested={this.props.workItemsChangeRequested}
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
    navigateToView : PropTypes.func.isRequired,
    stateChangeRequested : PropTypes.func.isRequired,
    workItemsChangeRequested : PropTypes.func.isRequired
}

export default WorkItems;