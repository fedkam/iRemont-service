import React from 'react';
import './social.scss';

import {ReactComponent as VkontakteIcon} from '../../assets/images/icon-vkontakte.svg';
import {ReactComponent as InstagramIcon} from '../../assets/images/icon-instagram.svg';
import {ReactComponent as WhatsAppIcon} from '../../assets/images/icon-whatsapp.svg';

const Social = () => {
  return (
    <div className="social-icons">
      <VkontakteIcon className="social-icon"/>
      <InstagramIcon className="social-icon"/>
      <WhatsAppIcon className="social-icon"/>
    </div>
  );
}

export default Social;
