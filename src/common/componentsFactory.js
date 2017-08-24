import WorkItems from '../components/workItems';
import WorkItemFullView from '../components/workItemFullView';
import WorkItemEditView from '../components/workItemEditView';
import ComponentsContainer from './componentsContainer';
import ComponentNames from './constants/componentNames';
import React, { Component } from 'react';


class ComponentsFactory {

    constructor(){
      this.componentsContainer = new ComponentsContainer();
    }

    create(componentName, props, state){
        var resolvedComponent;

        switch (componentName) {
          case ComponentNames.WorkItems:
            // resolvedComponent = this.componentsContainer.resolve(ComponentNames.WorkItems);
            // if(resolvedComponent == null){
                resolvedComponent = (<WorkItems {...props} state={state}/> );
                // this.componentsContainer.register(resolvedComponent, ComponentNames.WorkItems);
            // }
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

export default ComponentsFactory;
