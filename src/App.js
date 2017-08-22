import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContentArea from './components/mainContentArea';
import './App.css';
import WorkItems from './components/workItems';
import WorkItemFullView from './components/workItemFullView';

class ComponentsFactory {
    create(componentName, props){
        var resolvedComponent;

        switch (componentName) {
          case 'WorkItems':
            resolvedComponent = (<WorkItems {...props}/> );          
            break;  
          case 'WorkItemFullView':
            resolvedComponent = (<WorkItemFullView {...props}/> );
            break;
          default:
            console.log('Sorry, we are out of');
        }

        // resolvedComponent.props = props;
        return resolvedComponent;
    }
}


class App extends Component {

  constructor(props){
      super(props);

      const initialComponentInContentArea = "WorkItems";
      let initialProps = {}; 
      initialProps.navigateToView = this.onNavigateRequested.bind(this);

      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : initialProps
      }
  }

  onNavigateRequested(selectedItemComponentName, selectedItemProps){

    // selectedItemProps.navigateToView = this.onNavigateRequested.bind(this);
    this.setState({currentComponentInContentArea : selectedItemComponentName, 
      contentAreaCurrentProps: selectedItemProps });// this.state.contentAreaCurrentProps.hasOwnProperty("navigateToView") ? selectedItemProps : });
  }

  render() {

    let componentsFactory = new ComponentsFactory(); 
    return (
      <div className="App">
          <SideBar navigateToView={this.onNavigateRequested.bind(this)}/>
          <MainContentArea>
            {
                componentsFactory.create(this.state.currentComponentInContentArea, this.state.contentAreaCurrentProps)
            }
            
            </MainContentArea>
      </div>
    );
  }
}

export default App;
