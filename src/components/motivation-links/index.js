//import './motivation-links.scss';
import React from 'react'
import LinkElement from '../link-element'
import { ReactComponent as IconArrow } from '../../assets/images/icon-arrow.svg'



export const MotivationLink = ({ addCssClassName = '', data }) => (
  <LinkElement className={'motivation-links__link' + addCssClassName} path={data.path}>
    {data.name}
    <IconArrow className='motivation-links__arrow' />
  </LinkElement>
)



export const MotivationLinks = ({ addCssClassName = '', dataLink }) => (
  <div className={'motivation-links__links' + addCssClassName}>
    <MotivationLink
      addCssClassName={'\tmotivation-links__link_theme_indent'}
      data={dataLink.repair}
    />
    <MotivationLink
      addCssClassName={'\tmotivation-links__link_theme_indent'}
      data={dataLink.modding}
    />
  </div>
);

