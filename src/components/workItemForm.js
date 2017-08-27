import React, { Component } from 'react';
import './workItemForm.css';
import classNames from 'classnames';
import SingleInput from './singleInput';

class WorkItemForm extends Component {

  render() {
    return (

      <div className="workItemForm">
          <form onSubmit={(e) => this.props.handleSubmit(e)}>
            <div>
                <img src={this.props.imageUrl}/>
                <input type="text"
                    name="imageUrl" 
                    value={this.props.imageUrl} 
                    onChange={(e) => {
                        return this.props.handleInputChange(e);
                        }}
                    placeholder="Put here image URL"/>
            </div>
            
            <input type="text" 
                    name="title" 
            value={this.props.title} 
            onChange={(e) => this.props.handleInputChange(e)}                 
            placeholder="Put here title"/>

            <input type="text" 
                    name="description" 
            value={this.props.description} 
            onChange={(e) => this.props.handleInputChange(e)}                 
            placeholder="Put here description"/>

            <input type="submit" 
                value="Save"/>
        </form>
      </div>
    );
  }
}

export default WorkItemForm;