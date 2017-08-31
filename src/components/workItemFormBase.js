import React, { Component } from 'react';
import './workItemFormBase.css';
import classNames from 'classnames';
import WorkItemForm from './workItemForm';
import ListItemChangeType from '../common/constants/listItemChangeType';
import StringExtensions from '../common/extensions/stringExtensions';

class WorkItemFormBase extends Component {
  
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

      <div className="workItemEditView">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
                <img src={this.state.imageUrl}/>
                <input type="text"
                    name="imageUrl" 
                    value={this.state.imageUrl} 
                    onChange={(e) => this.handleInputChange(e)}
                    placeholder="Put here image URL"
                    required/>
            </div>
            
            <input type="text" 
                    name="title" 
            value={this.state.title} 
            onChange={(e) => this.handleInputChange(e)}                 
            placeholder="Put here title"
            maxLength={4}
            required/>

            <input type="text" 
                    name="description" 
            value={this.state.description} 
            onChange={(e) => this.handleInputChange(e)}                 
            placeholder="Put here description"/>

            <input type="submit" 
                value="Save"/>
        </form>
      </div>

        //   <WorkItemForm {...this.state}
        //       handleSubmit={this.props.handleSubmit}
        //       handleInputChange={this.handleInputChange}
        //            />
    );
  }
}

export default WorkItemFormBase;