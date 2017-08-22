import React, { Component } from 'react';
import './mainMenuItem.css';
import PropTypes from 'prop-types';

class MainMenuItem extends Component {
  
  render() {
    return (
      <div className="mainMenuItem" onClick={() => this.props.navigateToView(this.props.id, this.props)}>{this.props.title}</div>
    );
  }
}

MainMenuItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default MainMenuItem;