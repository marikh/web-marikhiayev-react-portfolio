import React, { Component } from 'react';
import './mainContentArea.css';

class MainContentArea extends Component {
  render() {
    return (
      <div className="mainContentArea">
        {this.props.children}
      </div>
    );
  }
}

export default MainContentArea;