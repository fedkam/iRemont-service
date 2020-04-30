//import './motivation-links.scss';
import React from 'react';
import LinkElement from '../link-element';
import {ReactComponent as IconArrow} from '../../assets/images/icon-arrow.svg';

const MotivationLinks = ({dataLink}) => (
  <div className='motivation-links__links'>
    <LinkElement className={'motivation-links__link'} path={dataLink.repair.path}>
        {dataLink.repair.name}
        <IconArrow className='motivation-links__arrow'/>
    </LinkElement>
    
    <LinkElement className={'motivation-links__link'} path={dataLink.modding.path}>
        {dataLink.modding.name}
        <IconArrow className='motivation-links__arrow'/>
    </LinkElement>
  </div>
);


export default MotivationLinks;
