import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContentArea from './components/mainContentArea';
import './App.css';
import WorkItems from './components/workItems';
import ComponentNames from './common/constants/componentNames';
import ComponentsFactory from './common/componentsFactory';
import ComponentsStateStore from './common/componentsStateStore';



class App extends Component {

  constructor(props){
      super(props);

      this.componentsFactory = new ComponentsFactory(); 
      this.componentsStateStore = new ComponentsStateStore();

      const initialComponentInContentArea = ComponentNames.WorkItems;
      let initialProps = {}; 
      initialProps.navigateToView = this.onNavigateRequested.bind(this);
      // initialProps.objectDidMount = this.onWorkItemsMountForTheFirstTime.bind(this);
      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : initialProps,
          currentComponentState : { items: []}
      }


  }

  // onWorkItemsMountForTheFirstTime(state){
  //     this.componentsStateStore.store(ComponentNames.WorkItems, state);
    
  // }

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

  render() {

    return (
      <div className="App">
          <SideBar navigateToView={this.onNavigateRequested.bind(this)}/>
          <MainContentArea>
            {
                this.componentsFactory.create(this.state.currentComponentInContentArea, this.state.contentAreaCurrentProps, this.state.currentComponentState)
            }
            
            </MainContentArea>
      </div>
    );
  }
}

export default App;
