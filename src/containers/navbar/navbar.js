import React, {useState} from 'react';
//import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import  {ReactComponent as HamburgerMenuIcon}  from '../../assets/images/icon-hamburgerMenu.svg';

const MenuElement = ({ className='', onClick='', path='/', name, children}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {children ? children : name}
      </NavLink>
    </div>
  );
}


const NavBar = ({getMenuList, typeMenuDesktop=true}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  let className = typeMenuDesktop ? 'navbar-desktop-link' : 'navbar-mobile-link';
  let dataNavBar = getMenuList();

  const menuLogo = (
    <MenuElement
      className={className}
      onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}
    >
      <LogoIcon className='test'/>
    </MenuElement>
  );

  const menuList = dataNavBar && dataNavBar.map((row, index) => (
    <MenuElement
      className={className}
      onClick={() => setSwitcherHamburgerMenu(false)}
      path={row.path}
      name={row.name}/>
  ));

  return (
    <>
      <div className='navbar'>
        {menuLogo}
        <div className='navbar-links'>
          {menuList}
        </div>
      </div>
    </>
  );
};


const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};

export default withDataService(mapMethodsToProps)(NavBar);
