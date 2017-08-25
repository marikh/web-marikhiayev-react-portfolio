import React, { Component } from 'react';
import './mainMenu.css';
import MainMenuItem from './mainMenuItem';

class MainMenu extends Component {
  
  constructor(props){
      super(props);

      this.state = {
          menuItems: [
              { index: 0, id: "WorkItems", title: "The Journal"},
              { index: 1, id: "TheMan", title: "The Man"}
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
                    key={item.id}
                    navigateToView={this.props.navigateToView}
                    stateChangeRequested={this.props.stateChangeRequested} />
            })
        }
      </div>
    );
  }
}

export default MainMenu;