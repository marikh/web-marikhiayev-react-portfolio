import React, { Component } from 'react';
import './socialMenuItem.css';

class SocialMenuItem extends Component {
  
  render() {
    return (
      <div className="socialMenuItem">
          <a href={this.props.url}><img src={this.props.image} className="socialMenuItem-logo" /></a>
      </div>
    );
  }
}

export default SocialMenuItem;