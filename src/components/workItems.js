import React, { Component } from 'react';
import WorkItem from './workItem';
import './workItems.css';

class WorkItems extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: [],
            selectedWorkItemId: null
        }
    }

    componentDidMount(){
        fetch('/data/portfolioItems.json')
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({ items: json });
        })
    }

  onWorkItemSelected(selectedItem){
        this.setState({selectedWorkItemId : selectedItem.id});
        this.props.navigateToView("WorkItemFullView", selectedItem.props);
  }
  
  render() {
    return (
      <div className="workItems">
          {
              this.state.items.map((item) => <WorkItem {...item} onWorkItemSelected={this.onWorkItemSelected.bind(this)}/> )
          }
      </div>
    );
  }
}

export default WorkItems;