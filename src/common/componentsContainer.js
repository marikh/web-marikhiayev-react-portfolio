
class ComponentsContainer{
  
  constructor(){
    this.componentsDictionary = {}
  }

  register(component, key, ovverideIfRegistered){
    if(ovverideIfRegistered === false && key in this.componentsDictionary){
      return;
    }

    this.componentsDictionary[key] = component;
  }

  resolve(key){
    if(key in this.componentsDictionary){
      return this.componentsDictionary[key];
    }

    return null;
  }
}

export default ComponentsContainer;