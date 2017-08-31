import React, { Component } from 'react';
import './socialMediaMenuItem.css';
import PropTypes from 'prop-types';

class SocialMediaMenuItem extends Component {
  
  render() {
    return (
      <span className="socialMediaMenuItem">
        <a href={this.props.socialMediaUrl} title={this.props.title} target="_blank">
          <img src={this.props.socialMediaIconImageUrl} className="socialMediaMenuItemImage" />
        </a>
      </span>
    );
  }
}

SocialMediaMenuItem.propTypes = {
  socialMediaUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  socialMediaIconImageUrl : PropTypes.string.isRequired
}

export default SocialMediaMenuItem;