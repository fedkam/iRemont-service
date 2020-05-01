//import './motivation-links.scss';
import React from 'react';
import LinkElement from '../link-element';
import { ReactComponent as IconArrow } from '../../assets/images/icon-arrow.svg';

export const MotivationLink = ({ data }) => (
  <LinkElement className={'motivation-links__link'} path={data.path}>
    {data.name}
    <IconArrow className='motivation-links__arrow' />
  </LinkElement>
)

export const MotivationLinks = ({ dataLink }) => (
  <div className='motivation-links__links'>
    <MotivationLink data={dataLink.repair} />
    <MotivationLink data={dataLink.modding} />
  </div>
);

