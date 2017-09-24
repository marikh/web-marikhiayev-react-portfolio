import React, { Component } from 'react';
import './workItemForm.css';
import StringExtensions from '../../common/extensions/stringExtensions';
import PropTypes from 'prop-types';
import classNames from 'classnames';



class WorkItemForm extends Component {
  
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = { title: !this.props.title ? "" : this.props.title,
                      description: !this.props.description ? "" : this.props.description,
                      imageUrl: !this.props.imageUrl ? "" : this.props.imageUrl,
                    
                      formSubmmited: false,
                    errorInSubmittingProcess: false};
    }
  
    handleInputChange(e){

        const target = e.target;
        const name = target.name;
        const value = StringExtensions.isNullOrWhiteSpace(target.value) ? "" : target.value;

        this.setState({ [name] : value, formSubmmited: false, errorInSubmittingProcess:false});

    }

    handleSubmit(e){

      try{

        e.preventDefault();   

        this.props.handleSubmit({id: this.props.id,
                        title: this.state.title,
                      description: this.state.description,
                      imageUrl: this.state.imageUrl});

        this.setState({formSubmmited: true, errorInSubmittingProcess: false});
      }
      catch(ex){
          console.log(ex.message);
          this.setState({errorInSubmittingProcess: true, formSubmmited: false});                
      }
    }

  render() {

    return (
      <div className="workItemForm">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            
            <img src={this.state.imageUrl} alt="" className="workItemFormImage"/>
            
            <div>Image URL:
            <input type="text"
                name="imageUrl" 
                className="form-control"
                value={this.state.imageUrl} 
                onChange={(e) => this.handleInputChange(e)}
                pattern=".{1,}"
                required title="The image URL can't be empty." />
              <span className={classNames(['input-validation-bottom-line', this.state.imageUrl.length > 0 && 'valid'])}>(The image URL can't be empty)</span>
            </div>
        
            <div>Title:
              <input type="text" 
                      name="title" 
                      className="form-control"
                      value={this.state.title} 
                      onChange={(e) => this.handleInputChange(e)}
                      pattern=".{4,4}" 
                      required title="The title must be 4 characters."/>
              <span className={classNames(['input-validation-bottom-line', this.state.title.length === 4 && 'valid'])}>(The title must be 4 characters)</span>
            </div>

            <div>Description:
            <textarea
            className="workItemFormTextArea form-control"
                    name="description" 
            value={this.state.description} 
            onChange={(e) => this.handleInputChange(e)}/>
             </div>

            <div className={classNames(['successfully-saved-message', this.state.formSubmmited && 'saved-message-visible'])}>Saved successfuly</div>
            <div className={classNames(['error-saving-message', this.state.errorInSubmittingProcess && 'error-saving-message-visible'])}>Error in saving process</div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

WorkItemForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl:PropTypes.string,
  description:PropTypes.string,
  handleSubmit : PropTypes.func.isRequired
}

export default WorkItemForm;