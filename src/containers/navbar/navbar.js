// как поддерживать все эти inline className непонятно

import React, {useState} from 'react';
//import './menu-list.scss';
import {withDataService} from '../hoc-helpers';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Social from '../../components/social';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';


const MenuElement = ({ className='', onClick='', path='/', children}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {children}
      </NavLink>
    </div>
  );
}


const HamburgerButton = ({setSwitcherHamburgerMenu, switcherHamburgerMenu}) => {
  const classNameHambergerMenu = switcherHamburgerMenu ? 'navbar-mobile__hamburgerMenu_active' : 'navbar-mobile__hamburgerMenu_inactive';

  return(
    <div className='navbar-mobile__hamburgerMenu' onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}>
      <div className={`navbar-mobile__hamburgerMenu-line ${classNameHambergerMenu}`}/>
      <div className={`navbar-mobile__hamburgerMenu-line ${classNameHambergerMenu}`}/>
    </div>
  );
}


const NavBar = ({getMenuList, typeMenuDesktop=true}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  const classNameElementMenu = typeMenuDesktop ? 'navbar-desktop__link' : 'navbar-mobile__link';
  const dataNavBar = getMenuList();

  const menuLogo = (
    <MenuElement
      onClick={() => setSwitcherHamburgerMenu(false)}
    >
      <LogoIcon className='navbar-desktop__logo'/>
    </MenuElement>
  );

  const menuHamburgerButton = (
    <HamburgerButton
      setSwitcherHamburgerMenu={setSwitcherHamburgerMenu}
      switcherHamburgerMenu={switcherHamburgerMenu}
    />
  );

  const menuList = dataNavBar && dataNavBar.map((row, index) => (
    <MenuElement
      className={classNameElementMenu}
      onClick={() => setSwitcherHamburgerMenu(false)}
      path={row.path}
      key={index}
    >
      {row.name}
    </MenuElement>
  ));

  return (
    <>
      <div className='navbar-wrap__menuTop'>
        {menuLogo}
        <div className='navbar-desktop__links'>
          {typeMenuDesktop ? menuList : menuHamburgerButton}
        </div>
      </div>
      <CSSTransition
        in={switcherHamburgerMenu}
        timeout={1000}
        classNames="navbar-wrap__menuBottom navbar-mobile__csstransition"
        unmountOnExit
      >
        <div>
          {menuList}
          <Social />
        </div>
      </CSSTransition>
    </>
  );
};


const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};


export default withDataService(mapMethodsToProps)(NavBar);
