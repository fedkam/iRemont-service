import React from 'react';
import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';

const MenuLink = ({className, onClick='', path, name}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {name}
      </NavLink>
    </div>
  );
}

const MenuList = ({getMenuList, typeMenuLine=true}) => {
  const dataMenuList = getMenuList();
  //const menuList = dataMenuList.map((row, index) => {})

  return (
    <MenuLink
      className='colorSt'
      onClick={()=>console.log("Bam!")}
      path='/'
      name='Имя'
      >
    </MenuLink>
);
}

const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};

export default withDataService(mapMethodsToProps)(MenuList);
