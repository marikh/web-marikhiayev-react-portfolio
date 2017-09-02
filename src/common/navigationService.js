

class ComponentsStateStore{
    constructor(){
      this.componentsState = {}
    }

    store(componentName,data){

      this.componentsState[componentName] = data;
    }

    getState(componentName){
      if(componentName in this.componentsState){
        return this.componentsState[componentName];
      }

      return null;
    }
}

export default ComponentsStateStore;
