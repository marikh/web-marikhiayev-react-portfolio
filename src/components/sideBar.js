import React, { Component } from 'react';
import './sideBar.css';
import MainMenu from './mainMenu';
import SocialMediaMenu from './socialMediaMenu';

class SideBar extends Component {
  
  render() {
    return (
      <div className="sideBar">
          <img /*src={}*/ className="sideBar-logo" />
          <MainMenu navigateToView={this.props.navigateToView} stateChangeRequested={this.props.stateChangeRequested} />
          <SocialMediaMenu />
      </div>
    );
  }
}

export default SideBar;