//import './offer-links.scss';
import React from 'react';
import LinkElement from '../link-element';
import {ReactComponent as IconArrow} from '../../assets/images/icon-arrow.svg';

const OfferLinks = ({dataLink}) => (
  <div className='offer-links__links'>
    <div className='offer-links__link'>
      <LinkElement className={'offer-links__text'} path={dataLink.repair.path}>
        {dataLink.repair.name}
      </LinkElement>
      <IconArrow className='offer-links__arrow'/>
    </div>

    <div className='offer-links__link'>
      <LinkElement className={'offer-links__text'} path={dataLink.modding.path}>
        {dataLink.modding.name}
      </LinkElement>
      <IconArrow className='offer-links__arrow'/>
    </div>
  </div>
);


export default OfferLinks;
