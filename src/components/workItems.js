import React, { Component } from 'react';
import WorkItem from './workItem';
import './workItems.css';

class WorkItems extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }

        this.fetchedData = false;
    }

    componentDidMount(){
        if(this.fetchedData == true)
            return;

        fetch('/data/portfolioItems.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({ items: json });
            this.fetchedData = true;
        })
    }
  
  onDeleteWorkItem(workItemId){
    const indexOfItemToDelete =  this.state.items.map(item => item.id).indexOf(workItemId);
    this.setState({ items: [...this.state.items.slice(0, indexOfItemToDelete), ...this.state.items.slice(indexOfItemToDelete + 1)] });
  }

  render() {
    return (
      <div className="workItems">
          {
              this.state.items.map((item) => 
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