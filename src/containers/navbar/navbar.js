import React, {useState} from 'react';
//import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import  {ReactComponent as HamburgerButtonIcon}  from '../../assets/images/icon-hamburgerMenu.svg';


const MenuElement = ({ className='', onClick='', path='/', children}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {children}
      </NavLink>
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
    <MenuElement
      onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}
    >
      <HamburgerButtonIcon className='navbar-mobile-hamburgerButton'/>
    </MenuElement>
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
      <div className='navbar'>
        <div className='navbar-wrap'>
          {menuLogo}
          <div className='navbar-links'>
            {typeMenuDesktop ? menuList : menuHamburgerButton}
          </div>
        </div>
      </div>
      <CSSTransition
        in={switcherHamburgerMenu}
        timeout={2000}
        classNames="navbar-mobile-hamburgerMenu-csstransition"
        unmountOnExit
      >
        <div className="navbar-mobile-hamburgerMenu">
          <div>{menuList}</div>
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
