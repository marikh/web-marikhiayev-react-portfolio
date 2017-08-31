import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContentArea from './components/mainContentArea';
import './App.css';
import WorkItems from './components/workItems';
import ComponentNames from './common/constants/componentNames';
import ListItemChangeType from './common/constants/listItemChangeType';
import ComponentsFactory from './common/componentsFactory';
import ComponentsStateStore from './common/componentsStateStore';

class App extends Component {

  constructor(props){
      super(props);

      this.componentsFactory = new ComponentsFactory(); 
      this.componentsStateStore = new ComponentsStateStore();

      this.EventHandlers = {
        navigateToView : this.onNavigateRequested.bind(this),
        stateChangeRequested : this.onStateChangeRequested.bind(this),
        workItemsChangeRequested : this.onWorkItemsChangeRequested.bind(this)
      };

      const initialComponentInContentArea = ComponentNames.WorkItems;
      const initialStateOfOfCurrentComponentInContentArea = { items: [] };
      
      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : {...this.EventHandlers},
          currentComponentState : initialStateOfOfCurrentComponentInContentArea
      }
  }

  componentDidMount(){

      WorkItems.getInitialComponentData().then((data) => {
        var workItemsFechedState =  { items: data };
        this.componentsStateStore.store(ComponentNames.WorkItems,workItemsFechedState);
        this.setState({currentComponentState : workItemsFechedState });
      });
  }


  onNavigateRequested(componentName, props, state){

    this.setState({currentComponentInContentArea : componentName, 
      contentAreaCurrentProps: props,
      currentComponentState: state
       });
  }

  onStateChangeRequested(componentName, newState){

    this.componentsStateStore.store(componentName,newState);
    this.setState({ currentComponentState: newState });
  }

  onWorkItemsChangeRequested(listItemChangeType, item){

    let workItemsState = this.componentsStateStore.getState(ComponentNames.WorkItems);

    switch(listItemChangeType){
      
      case ListItemChangeType.New:
      const itemsKeys = workItemsState.items.map(workItem => workItem.key);
      const newId = Math.max(...itemsKeys) + 1;
      let newItem = {...item};
      newItem["id"] = newId.toString();
      newItem["key"] = newId;
      workItemsState.items.push(newItem);
      break;
      
      case ListItemChangeType.Modified:
      let oldItem = workItemsState.items.find(workItem => workItem.id === item.id);
      Object.assign(oldItem, item);
      break;

      default:
      console.log("Couldn't map '" + listItemChangeType + "' to a list change action.");
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
