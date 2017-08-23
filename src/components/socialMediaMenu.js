import React, { Component } from 'react';
import './socialMediaMenu.css';
import SocialMediaMenuItem from './socialMediaMenuItem';

class SocialMediaMenu extends Component {
  
  constructor(props){
      super(props);

      this.state = {
          menuItems: []
      }
  }

  render() {
    return (
      <div className="socialMediaMenu">
        {
            this.state.menuItems.map((item) => {
                return <SocialMediaMenuItem 
                    {...item}
                    key={item.id} />
            })
        }
      </div>
    );
  }
}

export default SocialMediaMenu;