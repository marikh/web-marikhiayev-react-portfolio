import React, { Component } from 'react';
import './mainMenuItem.css';
import PropTypes from 'prop-types';

class MainMenuItem extends Component {
  
  render() {
    return (
      <a className="mainMenuItemLink" onClick={() => this.props.navigateToView(this.props.id, this.props)}>{this.props.title}</a>
    );
  }
}

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default MainMenuItem;