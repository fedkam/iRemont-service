//import './motivation-links.scss';
import React from 'react'
import LinkElement from '../link-element'
import { ReactComponent as IconArrow } from '../../assets/images/icon-arrow.svg'



export const MotivationLink = ({ addCssClassName = '', name, path }) => (
  <LinkElement className={'motivation-links__link' + addCssClassName} path={path}>
    {name}
    <IconArrow className='motivation-links__arrow' />
  </LinkElement>
)



export const MotivationLinks = ({ addCssClassName = '', dataLinks }) => (
  <div className={'motivation-links__links' + addCssClassName}>
    <MotivationLink
      addCssClassName={'\tmotivation-links__link_theme_indent'}
      name={dataLinks.repair.name}
      path={dataLinks.repair.path}
    />
    <MotivationLink
      addCssClassName={'\tmotivation-links__link_theme_indent'}
      name={dataLinks.modding.name}
      path={dataLinks.modding.path}
    />
  </div>
);

