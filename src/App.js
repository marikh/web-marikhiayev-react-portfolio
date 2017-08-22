import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContentArea from './components/mainContentArea';
import './App.css';
import WorkItems from './components/workItems';


class App extends Component {

  constructor(props){
      super(props);

      const initialComponentInContentArea = "WorkItems";
      this.state = {
          currentComponentInContentArea: initialComponentInContentArea,
          contentAreaCurrentProps : { navigateToView: this.onMenuItemSelected.bind(this) }
      }
  }

  onMenuItemSelected(selectedItemComponentName, selectedItemProps){
    this.setState({currentComponentInContentArea : selectedItemComponentName, contentAreaCurrentProps: selectedItemProps});
  }

  render() {
    return (
      <div className="App">
          <SideBar mainMenuItems={this.state.mainMenuItems} onMenuItemSelected={this.onMenuItemSelected.bind(this)} />
          <MainContentArea>
            {
                React.createElement(
                  this.state.currentComponentInContentArea,
                  this.state.contentAreaCurrentProps
                )
            }
            </MainContentArea>
      </div>
    );
  }
}

export default App;
