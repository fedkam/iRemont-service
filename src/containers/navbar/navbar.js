// как поддерживать все эти inline className непонятно

//import './menu-list.scss';
import React, {useState} from 'react';
import {Breakpoint} from 'react-socks';
import {withDataService} from '../hoc-helpers';
import {CSSTransition} from 'react-transition-group';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import Social from '../../components/social';
import HamburgerButton from '../hamburger-button';
import MenuElement from '../../components/menu-element';



const NavBar = ({getMenuList}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  const dataNavBar = getMenuList();

  const menuLeft = (
    <MenuElement onClick={() => setSwitcherHamburgerMenu(false)}>
      <LogoIcon className='navbar__logo'/>
    </MenuElement>
  );

  const menuList = (classNameElementMenu) => {
    return (
        dataNavBar && dataNavBar.map((row, index) => (
          <MenuElement
            className={classNameElementMenu}
            onClick={() => setSwitcherHamburgerMenu(false)}
            path={row.path}
            key={index}
          >
            {row.name}
          </MenuElement>)));
  };

  const menuRight = (
    <>
      <Breakpoint small down>
        <HamburgerButton
          setSwitcherHamburgerMenu={setSwitcherHamburgerMenu}
          switcherHamburgerMenu={switcherHamburgerMenu}/>
      </Breakpoint>

      <Breakpoint medium up>
        <div className='navbar-desktop__links'>
          {menuList('navbar-desktop__link')}
        </div>
      </Breakpoint>
    </>
  );

  const menuTop = (
    <>
      {menuLeft}
      {menuRight}
    </>
  );

  const menuBottom = (
    <CSSTransition
      in={switcherHamburgerMenu}
      timeout={1000}
      classNames="navbar-wrap__menuBottom navbar-mobile__csstransition"
      unmountOnExit
    >
      <div>
        {menuList('navbar-mobile__link')}
        <Social />
      </div>
    </CSSTransition>
  );

  return (
    <>
      <div className='navbar-wrap__menuTop'>
        {menuTop}
      </div>
      {menuBottom}
    </>
  );
};



const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};



export default withDataService(mapMethodsToProps)(NavBar);
