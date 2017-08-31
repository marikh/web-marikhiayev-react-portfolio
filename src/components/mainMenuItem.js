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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  navigateToView : PropTypes.func.isRequired,
  stateChangeRequested : PropTypes.func.isRequired,
  workItemsChangeRequested : PropTypes.func.isRequired
}

export default MainMenuItem;