//import './social.scss';
import React from 'react';
import { ReactComponent as VkontakteIcon } from '../../assets/images/icon-vkontakte.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/icon-instagram.svg';
import { ReactComponent as WhatsAppIcon } from '../../assets/images/icon-whatsapp.svg';



const Social = ({ addCssClassNames = '', whatsAppLink, instagramLink, vkLink }) => (
  <div className={'social-icons' + addCssClassNames}>
    <a className='social-icon' href={vkLink} >
      <VkontakteIcon />
    </a>

    <a className='social-icon' href={instagramLink} >
      <InstagramIcon />
    </a>

    <a className='social-icon' href={whatsAppLink} >
      <WhatsAppIcon />
    </a>
  </div>
)



export default Social;
