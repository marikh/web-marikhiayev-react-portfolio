import React, { Component } from 'react';
import SideBar from './components/sideBar/sideBar';
import MainContentArea from './components/mainContentArea/mainContentArea';
import './App.css';
import ComponentNames from './common/constants/componentNames';
import ComponentsFactory from './common/componentsFactory';
import ComponentsStateStore from './common/componentsStateStore';

class App extends Component {

  constructor(props){
      super(props);

      this.componentsFactory = new ComponentsFactory(); 
      this.componentsStateStore = new ComponentsStateStore();
      this.componentsStateStore.registerToStoreUpdates(this.onStateStoreChanged.bind(this));

      this.EventHandlers = {
        navigateToView : this.onNavigateRequested.bind(this)
      };

      const initialComponentInContentArea = ComponentNames.WorkItems;
      const initialStateOfOfCurrentComponentInContentArea = { items: [] };
      
      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : {...this.EventHandlers},
          currentComponentState : initialStateOfOfCurrentComponentInContentArea
      }
  }

  onNavigateRequested(componentName, props, state){

    this.setState({currentComponentInContentArea : componentName, 
      contentAreaCurrentProps: props,
      currentComponentState: state
       });
  }

  onStateStoreChanged(componentName, newState){

    if(this.state.currentComponentInContentArea === componentName){
      this.setState({ currentComponentState: newState });
    }
  }
  
  render() {

    return (
      <div className="App">
          <SideBar {...this.EventHandlers}/>
          <MainContentArea>
          {
              this.componentsFactory.create(this.state.currentComponentInContentArea, 
                                              this.state.contentAreaCurrentProps, 
                                              this.componentsStateStore.getState(this.state.currentComponentInContentArea))
          }
          </MainContentArea>
      </div>
    );
  }
}

export default App;
