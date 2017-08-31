import React, { Component } from 'react';
import './socialMediaMenu.css';
import SocialMediaMenuItem from '../socialMediaMenuItem/socialMediaMenuItem';

class SocialMediaMenu extends Component {
  
  constructor(props){
      super(props);

      this.state = {
          menuItems: [
              { key: 0, socialMediaUrl:"https://facebook.com" , socialMediaIconImageUrl: "/images/facebook.png", title: "Facebook" },
              { key: 1, socialMediaUrl:"https://instagram.com" , socialMediaIconImageUrl: "/images/instagram.png", title: "Instagram"},
              { key: 2, socialMediaUrl:"https://plus.google.com" , socialMediaIconImageUrl: "/images/googleplus.png", title: "Google Plus"},
              { key: 3, socialMediaUrl:"https://pinterest.com"  , socialMediaIconImageUrl: "/images/pinterest.png", title: "Pinterest"},
              { key: 4, socialMediaUrl:"https://twitter.com"  , socialMediaIconImageUrl: "/images/twitter.png", title: "Twitter"}
              ]
      }
  }

  render() {
    return (
      <div className="socialMediaMenu">
        {
            this.state.menuItems.map((item) => {
                return <SocialMediaMenuItem 
                    {...item} />
            })
        }
      </div>
    );
  }
}

export default SocialMediaMenu;