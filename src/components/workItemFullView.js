import React, { Component } from 'react';
import './workItemFullView.css';
import PropTypes from 'prop-types';

class WorkItemFullView extends Component {
  
  render() {
    return (
      <div className="workItemFullView">
          <h1>{this.props.title}</h1>
          <img src={this.props.imageUrl}/>
          <div className="workItemFullViewDescription">{this.props.description}</div>
      </div>
    );
  }
}


WorkItemFullView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired,
  description:PropTypes.string
}

export default WorkItemFullView;