//import './social.scss';
import React from 'react';
import {ReactComponent as VkontakteIcon} from '../../assets/images/icon-vkontakte.svg';
import {ReactComponent as InstagramIcon} from '../../assets/images/icon-instagram.svg';
import {ReactComponent as WhatsAppIcon} from '../../assets/images/icon-whatsapp.svg';

const Social = () => {
  return (
    <div className="social-icons">
      <a href='https://www.google.com/'>
        <VkontakteIcon className="social-icon"/>
      </a>
      <a href='https://www.google.com/'>
        <InstagramIcon className="social-icon"/>
      </a>
      <a href='https://www.google.com/'>
        <WhatsAppIcon className="social-icon"/>
      </a>
    </div>
  );
}

export default Social;
