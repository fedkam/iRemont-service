import React from 'react';
import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';


const MenuLink = ({ className='', onClick='', path, name, children}) => {
  let navElement;

  if (!children){
    navElement = <NavLink to={path}> {name} </NavLink>;
  } else {
    navElement = children;
  }

  return (
    <div className={className} onClick={onClick}>
      {navElement}
    </div>
  );
}


const MenuList = ({getMenuList, typeMenuLine=true}) => {
  let dataMenuList = getMenuList();

  const menuList = dataMenuList && dataMenuList.map((row, index) => {
    console.log('mass');
  })

  return (
    <>
    <MenuLink
      className='colorSt'
      onClick={()=>console.log("Bam!")}
      path='/'
      name='Имя'/>
    <MenuLink
      className='colorSt'
      onClick={()=>console.log("Bam!")}
    >
      {<h3>H3</h3>}
    </MenuLink>
    </>
  );
};

const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};

export default withDataService(mapMethodsToProps)(MenuList);
