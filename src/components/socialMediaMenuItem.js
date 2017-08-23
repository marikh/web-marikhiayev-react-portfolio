import React, { Component } from 'react';
import './socialMediaMenuItem.css';
import PropTypes from 'prop-types';

class SocialMediaMenuItem extends Component {
  
  render() {
    return (
      <img src={this.props.imageUrl} className="" />
    );
  }
}

SocialMediaMenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default SocialMediaMenuItem;