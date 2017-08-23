import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContentArea from './components/mainContentArea';
import './App.css';
import WorkItems from './components/workItems';
import WorkItemFullView from './components/workItemFullView';
import WorkItemEditView from './components/workItemEditView';

class ComponentsFactory {

    constructor(){
      this.componentsContainer = new ComponentsContainer();
      
    }

    create(componentName, props){
        var resolvedComponent;

        switch (componentName) {
          case 'WorkItems':
            resolvedComponent = this.componentsContainer.resolve("WorkItems");
            if(resolvedComponent == null){
              resolvedComponent = (<WorkItems {...props}/> );
                this.componentsContainer.register(resolvedComponent, "WorkItems");
            }

            break;  
          case 'WorkItemFullView':
            resolvedComponent = (<WorkItemFullView {...props}/> );
            break;
          case 'WorkItemEditView':
            resolvedComponent = (<WorkItemEditView {...props}/> );
            break;
          default:
            console.log('Sorry, we are out of');
        }

        // resolvedComponent.props = props;
        return resolvedComponent;
    }
}

class ComponentsContainer{
  
  constructor(){
    this.componentsDictionary = {}
  }

  register(component, key, ovverideIfRegistered){
    if(key in this.componentsDictionary){
      return;
    }

    this.componentsDictionary[key] = component;
  }

  resolve(key){
    if(key in this.componentsDictionary){
      return this.componentsDictionary[key];
    }

    return null;
  }
}


class App extends Component {

  constructor(props){
      super(props);


      this.componentsFactory = new ComponentsFactory(); 
      

      const initialComponentInContentArea = "WorkItems";
      let initialProps = {}; 
      initialProps.navigateToView = this.onNavigateRequested.bind(this);

      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : initialProps
      }
  }

  onNavigateRequested(selectedItemComponentName, selectedItemProps){

    this.setState({currentComponentInContentArea : selectedItemComponentName, 
      contentAreaCurrentProps: selectedItemProps });
  }

  render() {


    return (
      <div className="App">
          <SideBar navigateToView={this.onNavigateRequested.bind(this)}/>
          <MainContentArea>
            {
                this.componentsFactory.create(this.state.currentComponentInContentArea, this.state.contentAreaCurrentProps)
            }
            
            </MainContentArea>
      </div>
    );
  }
}

export default App;
