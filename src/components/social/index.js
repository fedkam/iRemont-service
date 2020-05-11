//import './social.scss';
import React from 'react';
import { ReactComponent as VkontakteIcon } from '../../assets/images/icon-vkontakte.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg';
import { ReactComponent as WhatsAppIcon } from '../../assets/images/icon-whatsapp.svg';



const Social = ({ addCssClassNames='' }) => (
  <div className={'social-icons' + addCssClassNames}>
    <a className='social-icon' href='https://www.google.com/' >
      <VkontakteIcon />
    </a>

    <a className='social-icon' href='https://www.google.com/' >
      <InstagramIcon />
    </a>

    <a className='social-icon' href='https://www.google.com/' >
      <WhatsAppIcon />
    </a>
  </div>
)



export default Social;
