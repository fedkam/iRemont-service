import React, {useState} from 'react';
import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import  {ReactComponent as HamburgerMenuIcon}  from '../../assets/images/icon-hamburgerMenu.svg';

const MenuElement = ({ className='', onClick='', path, name, children}) => {
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
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  let className = typeMenuLine ? 'navbar-desktop-link' : 'navbar-mobile-link';
  let dataMenuList = getMenuList();

  const menuLogo = (
    <MenuElement
      className={className}
      onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}
    >
      <LogoIcon className='test'/>
    </MenuElement>
  );

  const menuList = dataMenuList && dataMenuList.map((row, index) => (
    <MenuElement
      className={className}
      onClick={() => setSwitcherHamburgerMenu(false)}
      path={row.path}
      name={row.name}/>
  ));

  return (
    <>
      <div className='navbar-links'>
        {menuLogo}
        {menuList}
      </div>
    </>
  );
};


const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};

export default withDataService(mapMethodsToProps)(MenuList);
