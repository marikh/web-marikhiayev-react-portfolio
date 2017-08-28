import WorkItems from '../components/workItems';
import WorkItemFullView from '../components/workItemFullView';
import WorkItemAddView from '../components/workItemAddView';
import WorkItemEditView from '../components/workItemEditView';
import TheMan from '../components/theMan';
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
                resolvedComponent = (<WorkItems {...props} data={state}/> );
                // this.componentsContainer.register(resolvedComponent, ComponentNames.WorkItems);
            // }
            break;  
          case 'WorkItemFullView':
            resolvedComponent = (<WorkItemFullView {...props}/> );
            break;
          case 'WorkItemAddView':
            resolvedComponent = (<WorkItemAddView {...props}/> );
            break;
          case 'WorkItemEditView':
            resolvedComponent = (<WorkItemEditView {...props}/> );
            break;
          case 'TheMan':
            resolvedComponent = (<TheMan {...props}/> );
            break;
          default:
            throw "Couldn't navigate to the screen called '" + componentName + "'. No component mapped to this name.";
        }

        // resolvedComponent.props = props;
        return resolvedComponent;
    }
}

export default ComponentsFactory;
