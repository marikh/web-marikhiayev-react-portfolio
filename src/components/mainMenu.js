import React, { Component } from 'react';
import './mainMenu.css';
import MainMenuItem from './mainMenuItem';
import {Nav, NavItem} from 'react-bootstrap'
import lodash from 'lodash';

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

  onSelectedNavItem(selectedKey, event){
      var target = event.target;

      var allItemMenuLinks = document.getElementsByClassName("mainMenuItemLink");
      let activeLink = lodash.find(allItemMenuLinks, link => link.classList.contains("activeMainMenuLink"));
      if (activeLink != null)
        activeLink.classList.remove("activeMainMenuLink");

      target.classList.add("activeMainMenuLink");  

  }

  render() {
    return (
      <div className="mainMenu">
          <Nav>
            {
                this.state.menuItems.map((item) => {
                    return <NavItem key={item.key} onSelect={this.onSelectedNavItem}>
                                <MainMenuItem 
                                {...item}
                                navigateToView={this.props.navigateToView}
                                stateChangeRequested={this.props.stateChangeRequested}
                                workItemsChangeRequested={this.props.workItemsChangeRequested} />
                         </NavItem>
                })
            }
        </Nav>
      </div>
    );
  }
}

export default MainMenu;
                        /*<MainMenuItem 
                        {...item}
                        navigateToView={this.props.navigateToView}
                        stateChangeRequested={this.props.stateChangeRequested}
                        workItemsChangeRequested={this.props.workItemsChangeRequested} />*/


                        // onClick={() => this.props.navigateToView(item.id, {...item, navigateToView:this.props.navigateToView,
                        // stateChangeRequested:this.props.stateChangeRequested,
                        // workItemsChangeRequested:this.props.workItemsChangeRequested})}>{item.title}