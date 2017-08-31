import React, { Component } from 'react';
import './workItemForm.css';
import classNames from 'classnames';
import ListItemChangeType from '../common/constants/listItemChangeType';
import StringExtensions from '../common/extensions/stringExtensions';
import {Input} from "react-bootstrap";
import PropTypes from 'prop-types';


class WorkItemForm extends Component {
  
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = { title: !this.props.title ? "" : this.props.title,
                      description: !this.props.description ? "" : this.props.description,
                      imageUrl: !this.props.imageUrl ? "" : this.props.imageUrl};
    }
  
    handleInputChange(e){

        const target = e.target;
        const name = target.name;
        const value = StringExtensions.isNullOrWhiteSpace(target.value) ? "" : target.value;

        this.setState({ [name] : value });

    }

    handleSubmit(e){
        e.preventDefault();

        this.props.handleSubmit({id: this.props.id,
                        title: this.state.title,
                      description: this.state.description,
                      imageUrl: this.state.imageUrl});
    }

  render() {

    return (

      <div className="workItemForm">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            
            <img src={this.state.imageUrl} className="workItemFormImage"/>
            
            <div>Image URL:
            <input type="text"
                name="imageUrl" 
                className="form-control"
                value={this.state.imageUrl} 
                onChange={(e) => this.handleInputChange(e)}
                required/>
            </div>
        
            <div>Title:
            <input type="text" 
                    name="title" 
                    className="form-control"
            value={this.state.title} 
            onChange={(e) => this.handleInputChange(e)}
            maxLength={4}
            required/>
             </div>

            <div>Description:
            <textarea
            className="workItemFormTextArea form-control"
                    name="description" 
            value={this.state.description} 
            onChange={(e) => this.handleInputChange(e)}/>
             </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

WorkItemForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired,
  description:PropTypes.string,
  handleSubmit : PropTypes.func.isRequired
}

export default WorkItemForm;