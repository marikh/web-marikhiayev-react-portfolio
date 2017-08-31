import WorkItems from '../components/workItems/workItems';
import WorkItemFullView from '../components/workItemFullView/workItemFullView';
import WorkItemAddView from '../components/workItemAddView/workItemAddView';
import WorkItemEditView from '../components/workItemEditView/workItemEditView';
import TheMan from '../components/theMan/theMan';
import ComponentNames from './constants/componentNames';
import React from 'react';


class ComponentsFactory {

    create(componentName, props, state){
        var resolvedComponent;

        switch (componentName) {
          case ComponentNames.WorkItems:
                resolvedComponent = (<WorkItems {...props} data={state}/> );
            break;  
          case ComponentNames.WorkItemFullView:
            resolvedComponent = (<WorkItemFullView {...props}/> );
            break;
          case ComponentNames.WorkItemAddView:
            resolvedComponent = (<WorkItemAddView {...props}/> );
            break;
          case ComponentNames.WorkItemEditView:
            resolvedComponent = (<WorkItemEditView {...props}/> );
            break;
          case ComponentNames.TheMan:
            resolvedComponent = (<TheMan {...props}/> );
            break;
          default:
            throw new Error("Couldn't navigate to the screen called '" + componentName + "'. No component mapped to this name.");
        }

        return resolvedComponent;
    }
}

export default ComponentsFactory;
