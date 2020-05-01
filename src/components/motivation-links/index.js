//import './motivation-links.scss';
import React from 'react';
import LinkElement from '../link-element';
import { ReactComponent as IconArrow } from '../../assets/images/icon-arrow.svg';

export const MotivationLink = ({ className, data }) => (
  <div className={className}>
    <LinkElement className={'motivation-links__link'} path={data.path}>
      {data.name}
      <IconArrow className='motivation-links__arrow' />
    </LinkElement>
  </div>
)

export const MotivationLinks = ({ dataLink }) => (
  <div className='motivation-links__links'>
    <MotivationLink className='motivation-links__link_theme_indent' data={dataLink.repair} />
    <MotivationLink className='motivation-links__link_theme_indent' data={dataLink.modding} />
  </div>
);

