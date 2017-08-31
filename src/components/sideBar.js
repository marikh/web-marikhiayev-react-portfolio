import React, { Component } from 'react';
import './sideBar.css';
import MainMenu from './mainMenu';
import SocialMediaMenu from './socialMediaMenu';
import PropTypes from 'prop-types';

class SideBar extends Component {
  
  render() {
    return (
      <div className="sideBar">
          <img src="/images/logo.png" alt="" className="sideBar-logo" />
          <MainMenu navigateToView={this.props.navigateToView} 
              stateChangeRequested={this.props.stateChangeRequested}
              workItemsChangeRequested={this.props.workItemsChangeRequested} />
          <SocialMediaMenu />
      </div>
    );
  }
}

SideBar.propTypes = {
  navigateToView : PropTypes.func.isRequired,
  stateChangeRequested : PropTypes.func.isRequired,
  workItemsChangeRequested : PropTypes.func.isRequired
}

export default SideBar;