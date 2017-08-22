import React, { Component } from 'react';
import './sideBar.css';
import MainMenu from './mainMenu';

class SideBar extends Component {
  
  render() {
    return (
      <div className="sideBar">
          <img /*src={}*/ className="sideBar-logo" />
          <MainMenu menuItems={this.props.mainMenuItems} onSelected={this.props.onMenuItemSelected} />
      </div>
    );
  }
}

export default SideBar;