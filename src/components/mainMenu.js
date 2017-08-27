import React, { Component } from 'react';
import './mainMenu.css';
import MainMenuItem from './mainMenuItem';

class MainMenu extends Component {
  
  constructor(props){
      super(props);

      this.state = {
          menuItems: [
              { key: 0, id: "WorkItems", title: "The Work"},
              { key: 1, id: "WorkItemAddView", title: "Add Work"},
              { key: 2, id: "TheMan", title: "The Man"}
              ]
      }
  }

  render() {
    return (
      <div className="mainMenu">
        {
            this.state.menuItems.map((item) => {
                return <MainMenuItem 
                    {...item}
                    navigateToView={this.props.navigateToView}
                    stateChangeRequested={this.props.stateChangeRequested}
                    workItemsChangeRequested={this.props.workItemsChangeRequested} />
            })
        }
      </div>
    );
  }
}

export default MainMenu;