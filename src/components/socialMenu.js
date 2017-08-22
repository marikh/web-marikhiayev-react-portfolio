import React, { Component } from 'react';
import './sideMenu.css';

class SideMenu extends Component {

    constructor(props){
        super(props);

        const initialMenuItemId = "TheWork";
        this.state = {
            menuItems: [
                { index: 0, id: initialMenuItemId, title: "The Work"},
                { index: 1, id: "AddPortfolioItem", title: "Add Portfolio Item"},
                { index: 2, id: "TheMan", title: "The Man"}
                ],
            selectedMenuItemId: initialMenuItemId
        }
    }

  onMenuItemSelectionChanged(selectedItemId){
    this.setState({selectedMenuItemId : selectedItemId});
  }
  
  render() {
    return (
      <div className="sideMenu">
          <img src={logo} className="sideMenu-logo" />
          <SideMenu menuItems={this.state.menuItems} selectionChanged={this.onMenuItemSelectionChanged.bind(this)} />
          <MainContentArea>{"<" + this.state.selectedMenuItemId +"/>" }</MainContentArea>
      </div>
    );
  }
}

export default App;