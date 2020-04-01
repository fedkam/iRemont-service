// как поддерживать все эти inline className непонятно

import React, {useState} from 'react';
//import './menu-list.scss';
import {withDataService} from '../hoc-helpers';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Social from '../../components/social';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import {ReactComponent as HamburgerButtonIcon1} from '../../assets/images/icon-hamburgerMenu.svg';


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
  const classNameHambergerMenu = switcherHamburgerMenu ? 'navbar-mobile-hamburgerMenu-active' : 'navbar-mobile-hamburgerMenu';

  return(
    <div className={classNameHambergerMenu} onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}>
      <div className='navbar-mobile-hamburgerMenu-line'/>
      <div className='navbar-mobile-hamburgerMenu-line'/>
    </div>
  );
}


const NavBar = ({getMenuList, typeMenuDesktop=true}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  const classNameElementMenu = typeMenuDesktop ? 'navbar-desktop-link' : 'navbar-mobile-link';
  const dataNavBar = getMenuList();

  const menuLogo = (
    <MenuElement
      onClick={() => setSwitcherHamburgerMenu(false)}
    >
      <LogoIcon className='navbar-logo'/>
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
      <div className='navbar-wrap-menuTop'>
        {menuLogo}
        <div className='navbar-links'>
          {typeMenuDesktop ? menuList : menuHamburgerButton}
        </div>
      </div>
      <CSSTransition
        in={switcherHamburgerMenu}
        timeout={1000}
        classNames="navbar-wrap-menuBottom navbar-mobile-csstransition"
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
