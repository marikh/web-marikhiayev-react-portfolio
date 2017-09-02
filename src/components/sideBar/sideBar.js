import React, { Component } from 'react';
import './sideBar.css';
import MainMenu from '../mainMenu/mainMenu';
import SocialMediaMenu from '../socialMediaMenu/socialMediaMenu';
import PropTypes from 'prop-types';

class SideBar extends Component {
  
  render() {
    return (
      <div className="sideBar">
          <img src="/images/logo.png" alt="" className="sideBar-logo" />
          <MainMenu navigateToView={this.props.navigateToView}  />
          <SocialMediaMenu />
      </div>
    );
  }
}

SideBar.propTypes = {
  navigateToView : PropTypes.func.isRequired
}

export default SideBar;