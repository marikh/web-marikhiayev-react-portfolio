
let instance = null;

class ComponentsStateStore{
    constructor(){

      if(!instance){
        this.componentsState = {};
        this.callbacksOnStoreChanges = [];
        instance = this;
      }

      return instance;
    }

    store(componentName,data){

      this.componentsState[componentName] = data;
      this.onStateStoreChanged(componentName, data);
    }

    getState(componentName){
      if(componentName in this.componentsState){
        return this.componentsState[componentName];
      }

      return null;
    }

    registerToStoreUpdates(callback){
      this.callbacksOnStoreChanges.push(callback);
    }

    unregisterToStoreUpdates(callback){
      var indexOfCallabackToRemove = this.callbacksOnStoreChanges.indexOf(callback);
      this.callbacksOnStoreChanges.splice(indexOfCallabackToRemove,1);
    }

    onStateStoreChanged(componentName, newState){
      this.callbacksOnStoreChanges.forEach(callback => callback(componentName, newState));
    }
}

export default ComponentsStateStore;
